import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyArray = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray, null, 2), 'utf-8');
  } catch (error) {
    throw new Error(error);
  }
};

removeAllContacts();
