import { Injectable } from '@nestjs/common';
import { Turn } from './dto/turn.dto';

@Injectable()
export class AppService {
  private black_turn = true;
  private last_position_x = -1;
  private last_position_y = -1;

  getHello(): string {
    return 'API-GO';
  }

  getTurn(): Turn {
    return {
      black_turn: this.black_turn,
      position_x: this.last_position_x,
      position_y: this.last_position_y,
    };
  }

  postTurn(body: Turn): boolean {
    console.log(body);
    this.black_turn = body.black_turn;
    this.last_position_x = body.position_x;
    this.last_position_y = body.position_y;
    return true;
  }
}
