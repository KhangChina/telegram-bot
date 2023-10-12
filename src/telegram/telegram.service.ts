import { Injectable, Logger } from '@nestjs/common';
import { CreateTelegramDto } from './dto/create-telegram.dto';
import { UpdateTelegramDto } from './dto/update-telegram.dto';
const TelegramBot = require('node-telegram-bot-api');
const token = '6530088230:AAEGwavfXoSxG3D21e3NSnrEEL_e8tS-zkI';
@Injectable()
export class TelegramService {
  private readonly bot: any
  private logger = new Logger(TelegramService.name)
  constructor() {
    this.bot = new TelegramBot(token, { polling: true });
    this.bot.on("message",(msg) => this.onReceiveMessage(msg))
  }

  // {
  //   "message_id": 6,
  //   "from": {
  //     "id": 6646295962,
  //     "is_bot": false,
  //     "first_name": "Khang",
  //     "last_name": "Nguyen",
  //     "language_code": "vi"
  //   },
  //   "chat": {
  //     "id": 6646295962,
  //     "first_name": "Khang",
  //     "last_name": "Nguyen",
  //     "type": "private"
  //   },
  //   "date": 1697100870,
  //   "text": "hello"
  // }

  onReceiveMessage(msg : any)
  {
    this.logger.debug(msg)
  }

  async sendToUser(userID: string,msg : any)
  {
    await this.bot.sendMessage(userID,msg)
  }

  async create(createTelegramDto: CreateTelegramDto) {
     let data = await this.sendToUser("6646295962",createTelegramDto.msg)
     return data;
   
  }
}
