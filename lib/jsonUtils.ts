import { readFile, writeFile } from 'fs/promises';
import path from 'path';

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
  const items = await readJSON<T>(fileName);
  items.push(item as T);
  await writeJSON(fileName, items);
}

