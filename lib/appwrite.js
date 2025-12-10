// lib/appwrite.js
import { Client, Account, Avatars, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')   // Appwrite Cloud endpoint
  .setProject('69379c4c001d9cd70c8e');           // ← Your new Appwrite Cloud project ID

// Initialize services
export const account = new Account(client);
export const avatar = new Avatars(client);
export { ID }; // for generating unique IDs

export default client;
