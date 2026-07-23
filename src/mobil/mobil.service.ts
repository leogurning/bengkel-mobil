import { Injectable, NotFoundException } from '@nestjs/common';
import { MobilRepository } from './mobil.repository.js';
import { CreateMobilDto } from './dto/create-mobil.dto.js';
import { UpdateMobilDto } from './dto/update-mobil.dto.js';
import { Mobil } from './entities/mobil.entity.js';

@Injectable()
export class MobilService {
  constructor(private readonly mobilRepository: MobilRepository) {}

  findAll(): Mobil[] {
    return this.mobilRepository.findAll();
  }

  findOne(id: number): Mobil {
    const mobil = this.mobilRepository.findById(id);
    if (!mobil) {
      throw new NotFoundException(`Mobil dengan id ${id} tidak ditemukan`);
    }
    return mobil;
  }

  create(createMobilDto: CreateMobilDto): Mobil {
    return this.mobilRepository.create(createMobilDto);
  }

  update(id: number, updateMobilDto: UpdateMobilDto): Mobil {
    const mobil = this.mobilRepository.update(id, updateMobilDto);
    if (!mobil) {
      throw new NotFoundException(`Mobil dengan id ${id} tidak ditemukan`);
    }
    return mobil;
  }

  delete(id: number): void {
    const deleted = this.mobilRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Mobil dengan id ${id} tidak ditemukan`);
    }
  }
}
