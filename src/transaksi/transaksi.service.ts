import { Injectable, NotFoundException } from '@nestjs/common';
import { TransaksiRepository } from './transaksi.repository.js';
import { CreateTransaksiDto } from './dto/create-transaksi.dto.js';
import { UpdateTransaksiDto } from './dto/update-transaksi.dto.js';
import { Transaksi } from './entities/transaksi.entity.js';

@Injectable()
export class TransaksiService {
  constructor(private readonly transaksiRepository: TransaksiRepository) {}

  findAll(): Transaksi[] {
    return this.transaksiRepository.findAll();
  }

  findOne(id: number): Transaksi {
    const transaksi = this.transaksiRepository.findById(id);
    if (!transaksi) {
      throw new NotFoundException(`Transaksi dengan id ${id} tidak ditemukan`);
    }
    return transaksi;
  }

  create(createTransaksiDto: CreateTransaksiDto): Transaksi {
    return this.transaksiRepository.create(createTransaksiDto);
  }

  update(id: number, updateTransaksiDto: UpdateTransaksiDto): Transaksi {
    const transaksi = this.transaksiRepository.update(id, updateTransaksiDto);
    if (!transaksi) {
      throw new NotFoundException(`Transaksi dengan id ${id} tidak ditemukan`);
    }
    return transaksi;
  }

  delete(id: number): void {
    const deleted = this.transaksiRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Transaksi dengan id ${id} tidak ditemukan`);
    }
  }
}
