import { Module } from '@nestjs/common';
import { MobilController } from './mobil.controller.js';
import { MobilService } from './mobil.service.js';
import { MobilRepository } from './mobil.repository.js';

@Module({
  controllers: [MobilController],
  providers: [MobilService, MobilRepository],
  exports: [MobilRepository],
})
export class MobilModule {}
