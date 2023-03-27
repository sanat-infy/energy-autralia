import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { BandsController } from './bands.controller';
import { BandsService } from './bands.service';

@Module({
  imports: [HttpModule, SharedModule],
  controllers: [BandsController],
  providers: [BandsService],
})
export class BandsModule {}
