import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateTransaksiDto {
  @IsInt()
  mobilId: number;

  @IsInt()
  montirId: number;

  @IsInt()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  tanggalMasuk: string;

  @IsString()
  @IsNotEmpty()
  keluhan: string;

  @IsString()
  @IsNotEmpty()
  deskripsiPerbaikan: string;

  @IsNumber()
  biaya: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
