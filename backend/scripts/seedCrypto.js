import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { connectDB } from '../config/db.js';
import Crypto from '../models/Crypto.js';
import { seedCryptos } from '../data/seedCryptos.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function seedCrypto() {
  try {
    await connectDB();

    await Crypto.deleteMany({});
    await Crypto.insertMany(seedCryptos);

    console.log(`Seeded ${seedCryptos.length} crypto records.`);
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed crypto data:', error.message);
    process.exit(1);
  }
}

seedCrypto();
