import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const apikey = process.env.API_KEY || 'API_KEY not found';
    return `Hello World! ${apikey}`;
  }
}
