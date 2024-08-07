import { SESSION_ID_LENGTH } from '@/constants';
import { Collection } from 'mongodb';

const crypto = require('crypto');

export const generateSessionId = async (
  collection: Collection
): Promise<string> => {
  while (true) {
    const sessionId = crypto.randomBytes(SESSION_ID_LENGTH).toString('hex');
    const existing = await collection.findOne({ sessionId });
    if (!existing) return sessionId;
  }
};
