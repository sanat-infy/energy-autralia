import { Injectable } from '@nestjs/common';
import { Api } from '../api/api';

@Injectable()
export class BandsService {
  constructor(private api: Api) {}

  async getBands(): Promise<object> {
    const bandData = await this.api.getBandsDataFromApi();
    return bandData;
  }
}
