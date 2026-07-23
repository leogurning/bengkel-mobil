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
import { MobilService } from './mobil.service.js';
import { CreateMobilDto } from './dto/create-mobil.dto.js';
import { UpdateMobilDto } from './dto/update-mobil.dto.js';

@Controller('mobil')
export class MobilController {
  constructor(private readonly mobilService: MobilService) {}

  @Get()
  findAll() {
    return this.mobilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mobilService.findOne(id);
  }

  @Post()
  create(@Body() createMobilDto: CreateMobilDto) {
    return this.mobilService.create(createMobilDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMobilDto: UpdateMobilDto,
  ) {
    return this.mobilService.update(id, updateMobilDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.mobilService.delete(id);
  }
}
