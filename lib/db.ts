import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL || process.env.MONGO_URI;
console.log('🔍 Using URI:', MONGODB_URI ? MONGODB_URI.startsWith('mongodb') ? MONGODB_URI.replace(/:(.*?)@/, ':***@') : MONGODB_URI : '❌ NONE');

if (!MONGODB_URI) {
  console.error('❌ DATABASE_URL/MONGO_URI not set in .env.local');
  throw new Error('Missing MongoDB URI');
}

const maskedURI = MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//****:****@');
console.log('🔍 MongoDB URI loaded:', maskedURI);

if (!MONGODB_URI.startsWith('mongodb://') && !MONGODB_URI.startsWith('mongodb+srv://')) {
  console.error('❌ Invalid URI format:', maskedURI);
  throw new Error('Invalid MongoDB URI format');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
declare global {
  var mongoose: any | undefined;
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    const connectWithRetry = async (attempt = 1): Promise<typeof mongoose> => {
      try {
        return await mongoose.connect(MONGODB_URI!, {
          ...opts,
          serverSelectionTimeoutMS: 60000,
          socketTimeoutMS: 90000,
          maxPoolSize: 5,
          family: 4, // IPv4 only
        });

      } catch (err: any) {
        console.error('Full connect error:', err);
        console.error('Code:', err.code, 'Name:', err.name);
        console.error(`❌ MongoDB connect attempt ${attempt} failed:`, err.message);
        if (attempt >= 5) {
          const errorType = err.message.includes('authentication') ? '🔐 AUTH' :
                          err.message.includes('ECONNREFUSED') || err.message.includes('querySrv') ? '🌐 NETWORK/FIREWALL - Check Atlas IP whitelist & cluster status' :
                          '❓ UNKNOWN';
          console.error(`${errorType}`);
          console.error('Your IP:', (await import('node:os')).networkInterfaces()); 
          throw new Error(`MongoDB connection failed after 5 retries: ${err.message}`);
        }
        console.log(`🔄 Retrying in 2s... (attempt ${attempt + 1}/5)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return connectWithRetry(attempt + 1);
      }
    };

    cached.promise = connectWithRetry().then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e: any) {
    cached.promise = null;
    console.error('💥 Final connection failed:', e.message);
    throw e;
  }

  return cached.conn;
}

export default connectDB;

