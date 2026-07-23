import { Module } from '@nestjs/common';
import { TransaksiController } from './transaksi.controller.js';
import { TransaksiService } from './transaksi.service.js';
import { TransaksiRepository } from './transaksi.repository.js';

@Module({
  controllers: [TransaksiController],
  providers: [TransaksiService, TransaksiRepository],
  exports: [TransaksiRepository],
})
export class TransaksiModule {}
