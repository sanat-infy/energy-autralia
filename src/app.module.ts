import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandsModule } from './bands/bands.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BandsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
