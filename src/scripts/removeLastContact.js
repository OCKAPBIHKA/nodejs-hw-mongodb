import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(error);
  }
};

const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    throw new Error(error);
  }
};

const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();

  writeContacts(contacts);
};

removeLastContact();
