import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';

@Injectable()
export class Api {
  constructor(private http: HttpService) {}

  async getBandsDataFromApi() {
    return this.http
      .get('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals')
      .pipe(map((res) => res))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
