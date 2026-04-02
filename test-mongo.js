require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

console.log('MONGO_URI:', process.env.MONGO_URI || process.env.DATABASE_URL ? '✓ Present (masked)' : '❌ Missing');

async function testConnection() {
  try {
    await mongoose.connect(process.env.DATABASE_URL || process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ Connection successful!');
    await mongoose.connection.db.admin().ping();
    console.log('🏓 Ping successful - ready for ops');
    const dbs = await mongoose.connection.db.admin().listDatabases();
    console.log('Databases:', dbs.databases.map(db => db.name));
    await mongoose.disconnect();
  } catch (err) {
    console.error('💥 Connection failed:', err.message);
    if (err.message.includes('ECONNREFUSED')) console.error('🔥 Firewall/Network - check Atlas IP whitelist');
    if (err.message.includes('authentication')) console.error('🔐 Wrong username/pass');
    console.error('Full error:', err);
  }
}

testConnection();
