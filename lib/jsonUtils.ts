import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { kv } from '@vercel/kv';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  details: string;
  fileUrl?: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  weightGoal: string;
  createdAt: string;
}

export async function readJSON<T>(fileName: string): Promise<T[]> {
  const key = fileName.replace('.json', '');
  if (process.env.VERCEL) {
    try {
      const items = await kv.lrange<string>(key, 0, -1);
      return items.map(item => JSON.parse(item));
    } catch (error) {
      console.error('KV read error:', error);
      return [];
    }
  }
  try {
    const filePath = path.join(DATA_DIR, fileName);
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function writeJSON<T>(fileName: string, data: T[]): Promise<void> {
  const filePath = path.join(DATA_DIR, fileName);
  await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function appendToJSON<T>(fileName: string, item: T): Promise<void> {
  const key = fileName.replace('.json', '');
  const jsonItem = JSON.stringify(item);
  if (process.env.VERCEL) {
    try {
      await kv.rpush(key, jsonItem);
      console.log('KV append:', key);
    } catch (error) {
      console.error('KV append error:', error);
    }
    return;
  }
  const items = await readJSON<T>(fileName);
  items.push(item as T);
  await writeJSON(fileName, items);
}

