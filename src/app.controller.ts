import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Turn } from './dto/turn.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getTurn')
  getTurn(): Turn {
    return this.appService.getTurn();
  }

  @Post('postTurn')
  postTurn(@Body() turn: Turn): boolean {
    return this.appService.postTurn(turn);
  }
}
