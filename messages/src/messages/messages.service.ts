import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

  async findOne(id: string) {
    const message = await this.messagesRepository.findOne(id);
    return message;
  }

  async findAll() {
    const messages = await this.messagesRepository.findAll();
    return messages;
  }

  async create(content: string) {
    const createdMessage = await this.messagesRepository.create(content);
    return createdMessage;
  }
}
