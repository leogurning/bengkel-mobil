import { Injectable } from '@nestjs/common';
import { Transaksi } from './entities/transaksi.entity.js';
import { CreateTransaksiDto } from './dto/create-transaksi.dto.js';
import { UpdateTransaksiDto } from './dto/update-transaksi.dto.js';
import { transaksisData } from '../data/transaksis.js';

@Injectable()
export class TransaksiRepository {
  private transaksis: Transaksi[] = [];
  private nextId = 1;

  constructor() {
    transaksisData.forEach((data) => {
      this.transaksis.push({ id: this.nextId++, ...data });
    });
  }

  findAll(): Transaksi[] {
    return this.transaksis;
  }

  findById(id: number): Transaksi | undefined {
    return this.transaksis.find((transaksi) => transaksi.id === id);
  }

  create(createTransaksiDto: CreateTransaksiDto): Transaksi {
    const transaksi: Transaksi = {
      id: this.nextId++,
      tanggalSelesai: null,
      ...createTransaksiDto,
    };
    this.transaksis.push(transaksi);
    return transaksi;
  }

  update(
    id: number,
    updateTransaksiDto: UpdateTransaksiDto,
  ): Transaksi | undefined {
    const index = this.transaksis.findIndex((transaksi) => transaksi.id === id);
    if (index === -1) return undefined;

    this.transaksis[index] = {
      ...this.transaksis[index],
      ...updateTransaksiDto,
    };
    return this.transaksis[index];
  }

  delete(id: number): boolean {
    const index = this.transaksis.findIndex((transaksi) => transaksi.id === id);
    if (index === -1) return false;

    this.transaksis.splice(index, 1);
    return true;
  }
}
