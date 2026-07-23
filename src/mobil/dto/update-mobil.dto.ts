import { PartialType } from '@nestjs/mapped-types';
import { CreateMobilDto } from './create-mobil.dto.js';

export class UpdateMobilDto extends PartialType(CreateMobilDto) {}
