import { Injectable, NotFoundException } from '@nestjs/common';
import { MontirRepository } from './montir.repository.js';
import { CreateMontirDto } from './dto/create-montir.dto.js';
import { UpdateMontirDto } from './dto/update-montir.dto.js';
import { Montir } from './entities/montir.entity.js';

@Injectable()
export class MontirService {
  constructor(private readonly montirRepository: MontirRepository) {}

  findAll(): Montir[] {
    return this.montirRepository.findAll();
  }

  findOne(id: number): Montir {
    const montir = this.montirRepository.findById(id);
    if (!montir) {
      throw new NotFoundException(`Montir dengan id ${id} tidak ditemukan`);
    }
    return montir;
  }

  create(createMontirDto: CreateMontirDto): Montir {
    return this.montirRepository.create(createMontirDto);
  }

  update(id: number, updateMontirDto: UpdateMontirDto): Montir {
    const montir = this.montirRepository.update(id, updateMontirDto);
    if (!montir) {
      throw new NotFoundException(`Montir dengan id ${id} tidak ditemukan`);
    }
    return montir;
  }

  delete(id: number): void {
    const deleted = this.montirRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Montir dengan id ${id} tidak ditemukan`);
    }
  }
}
