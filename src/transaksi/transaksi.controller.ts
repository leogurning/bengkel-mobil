import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TransaksiService } from './transaksi.service.js';
import { CreateTransaksiDto } from './dto/create-transaksi.dto.js';
import { UpdateTransaksiDto } from './dto/update-transaksi.dto.js';

@Controller('transaksi')
export class TransaksiController {
  constructor(private readonly transaksiService: TransaksiService) {}

  @Get()
  findAll() {
    return this.transaksiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transaksiService.findOne(id);
  }

  @Post()
  create(@Body() createTransaksiDto: CreateTransaksiDto) {
    return this.transaksiService.create(createTransaksiDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransaksiDto: UpdateTransaksiDto,
  ) {
    return this.transaksiService.update(id, updateTransaksiDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.transaksiService.delete(id);
  }
}
