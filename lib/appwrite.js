// lib/appwrite.js
import { Client, Account, Avatars, ID, Databases} from 'appwrite';

// Initialize the Appwrite client
export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')   // Appwrite Cloud endpoint
  .setProject('694aa042002d6d5ae84a')  
  // .setPlatform('com.puppet.shelfieapp');       // ← Your new Appwrite Cloud project ID

// Initialize services
export const account = new Account(client);
export const avatar = new Avatars(client);
export { ID }; // for generating unique IDs
export const databases = new  Databases(client);


