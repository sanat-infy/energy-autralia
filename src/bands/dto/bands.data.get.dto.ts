import { BandsFestivalDto } from './bands.festival.get.dto';

export class BandsDataDto {
  bandName: string;
  bandFestival: Array<BandsFestivalDto>;
}
