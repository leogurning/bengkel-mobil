import { Mobil } from '../mobil/entities/mobil.entity.js';

export const mobilsData: Omit<Mobil, 'id'>[] = [
  {
    platNomor: 'B 1234 ABC',
    merk: 'Toyota',
    model: 'Avanza',
    tahun: 2020,
    warna: 'Hitam',
    customerId: 1,
  },
  {
    platNomor: 'D 5678 DEF',
    merk: 'Honda',
    model: 'Jazz',
    tahun: 2019,
    warna: 'Putih',
    customerId: 2,
  },
  {
    platNomor: 'L 9012 GHI',
    merk: 'Suzuki',
    model: 'Ertiga',
    tahun: 2021,
    warna: 'Silver',
    customerId: 3,
  },
  {
    platNomor: 'AB 3456 JKL',
    merk: 'Daihatsu',
    model: 'Xenia',
    tahun: 2018,
    warna: 'Merah',
    customerId: 4,
  },
  {
    platNomor: 'H 7890 MNO',
    merk: 'Mitsubishi',
    model: 'Pajero Sport',
    tahun: 2022,
    warna: 'Biru',
    customerId: 5,
  },
];
