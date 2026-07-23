import { Montir } from '../montir/entities/montir.entity.js';

export const montirsData: Omit<Montir, 'id'>[] = [
  {
    nama: 'Joko Widodo',
    spesialisasi: 'Mesin',
    noTelepon: '081111222333',
    alamat: 'Jl. Kebon Jeruk No. 3, Jakarta Barat',
    status: 'tersedia',
  },
  {
    nama: 'Agus Setiawan',
    spesialisasi: 'Kelistrikan',
    noTelepon: '082222333444',
    alamat: 'Jl. Cempaka Putih No. 15, Jakarta Pusat',
    status: 'tersedia',
  },
  {
    nama: 'Rudi Hartono',
    spesialisasi: 'Body & Cat',
    noTelepon: '083333444555',
    alamat: 'Jl. Pahlawan No. 7, Bekasi',
    status: 'sedang_bekerja',
  },
  {
    nama: 'Dedi Kurniawan',
    spesialisasi: 'AC & Radiator',
    noTelepon: '084444555666',
    alamat: 'Jl. Raya Bogor No. 22, Depok',
    status: 'tersedia',
  },
  {
    nama: 'Hendra Gunawan',
    spesialisasi: 'Transmisi & Kopling',
    noTelepon: '085555666777',
    alamat: 'Jl. Veteran No. 9, Tangerang',
    status: 'sedang_bekerja',
  },
];
