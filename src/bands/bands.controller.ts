import { Controller, Get } from '@nestjs/common';
import { BandsService } from './bands.service';

@Controller('/bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Get()
  getBandsList(): object {
    return this.bandsService.getBands();
  }
}
