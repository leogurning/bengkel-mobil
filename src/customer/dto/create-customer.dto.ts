import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  noTelepon: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  alamat: string;
}
