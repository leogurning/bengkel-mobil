import { Injectable } from '@nestjs/common';
import { Mobil } from './entities/mobil.entity.js';
import { CreateMobilDto } from './dto/create-mobil.dto.js';
import { UpdateMobilDto } from './dto/update-mobil.dto.js';
import { mobilsData } from '../data/mobils.js';

@Injectable()
export class MobilRepository {
  private mobils: Mobil[] = [];
  private nextId = 1;

  constructor() {
    mobilsData.forEach((data) => {
      this.mobils.push({ id: this.nextId++, ...data });
    });
  }

  findAll(): Mobil[] {
    return this.mobils;
  }

  findById(id: number): Mobil | undefined {
    return this.mobils.find((mobil) => mobil.id === id);
  }

  create(createMobilDto: CreateMobilDto): Mobil {
    const mobil: Mobil = {
      id: this.nextId++,
      ...createMobilDto,
    };
    this.mobils.push(mobil);
    return mobil;
  }

  update(id: number, updateMobilDto: UpdateMobilDto): Mobil | undefined {
    const index = this.mobils.findIndex((mobil) => mobil.id === id);
    if (index === -1) return undefined;

    this.mobils[index] = { ...this.mobils[index], ...updateMobilDto };
    return this.mobils[index];
  }

  delete(id: number): boolean {
    const index = this.mobils.findIndex((mobil) => mobil.id === id);
    if (index === -1) return false;

    this.mobils.splice(index, 1);
    return true;
  }
}
