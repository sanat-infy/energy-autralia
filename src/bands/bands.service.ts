import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class BandsService {
  private readonly logger = new Logger(BandsService.name);
  constructor(private readonly httpService: HttpService) {}

  async getBands() {
    const bandData = await this.getBandsDataFromApi();
    if (bandData) {
      const updatedData = bandData.forEach((val) => {
        val[0].bands.sort();
      });
      this.logger.debug('Data', updatedData);
      return bandData;
    } else {
      return { error: 'Data Not Available' };
    }
  }

  async getBandsDataFromApi() {
    return this.httpService
      .get('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals')
      .pipe(map((response) => response.data))
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      );
  }
}
