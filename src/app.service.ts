import { Injectable, Query } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("triggered");
    return 'Hello World!';
  }
}
