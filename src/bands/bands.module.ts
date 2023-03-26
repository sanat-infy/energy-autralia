import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BandsController } from './bands.controller';
import { BandsService } from './bands.service';

@Module({
  imports: [HttpModule],
  controllers: [BandsController],
  providers: [BandsService],
})
export class BandsModule {}
