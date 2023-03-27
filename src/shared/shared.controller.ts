import { Controller } from '@nestjs/common';
import { SharedService } from './shared.service';

@Controller('shared')
export class SharedController {
  constructor(private readonly sharedService: SharedService) {}

  getEndPoint(): string {
    return this.sharedService.endPoint as unknown as string;
  }
}
