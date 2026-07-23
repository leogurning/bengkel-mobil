import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMontirDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  spesialisasi: string;

  @IsString()
  @IsNotEmpty()
  noTelepon: string;

  @IsString()
  @IsNotEmpty()
  alamat: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
