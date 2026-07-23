import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MobilModule } from './mobil/mobil.module.js';
import { MontirModule } from './montir/montir.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { TransaksiModule } from './transaksi/transaksi.module.js';

@Module({
  imports: [MobilModule, MontirModule, CustomerModule, TransaksiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
