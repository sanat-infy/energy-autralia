import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  apiEndPointUrl(): string {
    return 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals';
  }
}
