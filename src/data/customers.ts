import { Customer } from '../customer/entities/customer.entity.js';

export const customersData: Omit<Customer, 'id'>[] = [
  {
    nama: 'Budi Santoso',
    noTelepon: '081234567890',
    email: 'budi.santoso@email.com',
    alamat: 'Jl. Merdeka No. 10, Jakarta Selatan',
  },
  {
    nama: 'Siti Rahayu',
    noTelepon: '082345678901',
    email: 'siti.rahayu@email.com',
    alamat: 'Jl. Sudirman No. 25, Bandung',
  },
  {
    nama: 'Ahmad Hidayat',
    noTelepon: '083456789012',
    email: 'ahmad.hidayat@email.com',
    alamat: 'Jl. Gatot Subroto No. 5, Surabaya',
  },
  {
    nama: 'Dewi Lestari',
    noTelepon: '084567890123',
    email: 'dewi.lestari@email.com',
    alamat: 'Jl. Diponegoro No. 88, Yogyakarta',
  },
  {
    nama: 'Eko Prasetyo',
    noTelepon: '085678901234',
    email: 'eko.prasetyo@email.com',
    alamat: 'Jl. Ahmad Yani No. 12, Semarang',
  },
];
