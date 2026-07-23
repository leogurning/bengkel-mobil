import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateMobilDto {
  @IsString()
  @IsNotEmpty()
  platNomor: string;

  @IsString()
  @IsNotEmpty()
  merk: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsInt()
  tahun: number;

  @IsString()
  @IsNotEmpty()
  warna: string;

  @IsInt()
  customerId: number;
}
