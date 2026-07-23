export class Transaksi {
  id: number;
  mobilId: number;
  montirId: number;
  customerId: number;
  tanggalMasuk: string;
  tanggalSelesai: string | null;
  keluhan: string;
  deskripsiPerbaikan: string;
  biaya: number;
  status: string; // 'pending' | 'dalam_pengerjaan' | 'selesai'
}
