import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkRoute(): string {
    return 'Route, please call with /bands';
  }
}
