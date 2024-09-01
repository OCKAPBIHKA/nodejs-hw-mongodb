import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data).length;
  } catch (error) {
    throw new Error(error);
  }
};

console.log(await countContacts());
