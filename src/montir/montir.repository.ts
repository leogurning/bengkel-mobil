import { Injectable } from '@nestjs/common';
import { Montir } from './entities/montir.entity.js';
import { CreateMontirDto } from './dto/create-montir.dto.js';
import { UpdateMontirDto } from './dto/update-montir.dto.js';
import { montirsData } from '../data/montirs.js';

@Injectable()
export class MontirRepository {
  private montirs: Montir[] = [];
  private nextId = 1;

  constructor() {
    montirsData.forEach((data) => {
      this.montirs.push({ id: this.nextId++, ...data });
    });
  }

  findAll(): Montir[] {
    return this.montirs;
  }

  findById(id: number): Montir | undefined {
    return this.montirs.find((montir) => montir.id === id);
  }

  create(createMontirDto: CreateMontirDto): Montir {
    const montir: Montir = {
      id: this.nextId++,
      ...createMontirDto,
    };
    this.montirs.push(montir);
    return montir;
  }

  update(id: number, updateMontirDto: UpdateMontirDto): Montir | undefined {
    const index = this.montirs.findIndex((montir) => montir.id === id);
    if (index === -1) return undefined;

    this.montirs[index] = { ...this.montirs[index], ...updateMontirDto };
    return this.montirs[index];
  }

  delete(id: number): boolean {
    const index = this.montirs.findIndex((montir) => montir.id === id);
    if (index === -1) return false;

    this.montirs.splice(index, 1);
    return true;
  }
}
