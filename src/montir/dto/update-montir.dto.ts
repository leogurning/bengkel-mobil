import { PartialType } from '@nestjs/mapped-types';
import { CreateMontirDto } from './create-montir.dto.js';

export class UpdateMontirDto extends PartialType(CreateMontirDto) {}
