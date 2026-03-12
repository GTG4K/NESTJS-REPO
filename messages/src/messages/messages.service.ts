import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    const message = await this.messagesRepo.findOne(id);
    return message;
  }

  async findAll() {
    const messages = await this.messagesRepo.findAll();
    return messages;
  }

  async create(content: string) {
    const createdMessage = await this.messagesRepo.create(content);
    return createdMessage;
  }
}
