import { readFile, writeFile } from 'fs/promises';
import { Messages } from './messages.types';
import { randomUUID } from 'node:crypto';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Messages;

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Messages;

    return Object.values(messages);
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as Messages;

    const id = randomUUID();
    const messageToAdd = {
      id,
      content,
    };

    messages[id] = messageToAdd;

    await writeFile('messages.json', JSON.stringify(messages, null, 2));
    return messageToAdd;
  }
}
