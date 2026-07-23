import { Module } from '@nestjs/common';
import { MontirController } from './montir.controller.js';
import { MontirService } from './montir.service.js';
import { MontirRepository } from './montir.repository.js';

@Module({
  controllers: [MontirController],
  providers: [MontirService, MontirRepository],
  exports: [MontirRepository],
})
export class MontirModule {}
