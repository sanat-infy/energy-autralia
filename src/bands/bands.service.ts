import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map } from 'rxjs';
import { Musicfestival } from '../model/musicfestival/musicfestival.interface';
import { SharedService } from '../shared/shared.service';

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
    return this.httpService
      .get(this.sharedService.apiEndPointUrl())
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ) as Musicfestival;
  }
}
