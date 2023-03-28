import { Injectable } from '@nestjs/common';
import { Constants } from '../constants/app.constants';

@Injectable()
export class SharedService {
  apiEndPointUrl(): string {
    return `${process.env.BASE_URL}${Constants.festival}`;
  }
}
