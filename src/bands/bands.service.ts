import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable, Logger } from '@nestjs/common';
import { Musicfestival } from '../model/musicfestival/musicfestival.interface';
import { SharedService } from '../shared/shared.service';
import { request } from '../network/network.request';
import { MethodTypes } from '../constants/method.types';
import { Constants } from '../constants/app.constants';

@Injectable()
export class BandsService {
  private readonly logger = new Logger(BandsService.name);
  constructor(
    private readonly httpService: HttpService,
    private readonly sharedService: SharedService,
  ) {}

  async getBands() {
    return this.getBandsDataFromApi().then((data: Musicfestival) => {
      return data;
    });
  }

  async getBandsDataFromApi(): Promise<Musicfestival> {
    return request(
      MethodTypes.GET,
      `${process.env.BASE_URL}${Constants.festival}`,
      null,
      null,
    ) as Musicfestival;
  }
}
