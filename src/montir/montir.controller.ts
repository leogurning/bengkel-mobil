import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { MontirService } from './montir.service.js';
import { CreateMontirDto } from './dto/create-montir.dto.js';
import { UpdateMontirDto } from './dto/update-montir.dto.js';

@Controller('montir')
export class MontirController {
  constructor(private readonly montirService: MontirService) {}

  @Get()
  findAll() {
    return this.montirService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.montirService.findOne(id);
  }

  @Post()
  create(@Body() createMontirDto: CreateMontirDto) {
    return this.montirService.create(createMontirDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMontirDto: UpdateMontirDto,
  ) {
    return this.montirService.update(id, updateMontirDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.montirService.delete(id);
  }
}
