import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
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

const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  writeContacts(contacts);
};

generateContacts(5);
