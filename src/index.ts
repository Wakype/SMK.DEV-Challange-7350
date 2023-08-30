type hasil = {
  angkaAwal: number;
  angkaAkhir: number;
  bilanganPrima: number[];
};

const isBilanganPrima = (angka: number): boolean => {
  if (angka <= 1) {
    return false;
  }

  if (angka <= 3) {
    return true;
  }

  if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }

  // BINGUNG DIBAGIAN INI 🤔
  for (let i = 5; i * i <= angka; i += 6) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const listBilanganPrima = (angkaAwal: number, angkaAkhir: number): hasil => {
  const bilanganPrima: number[] = [];

  for (let i = angkaAwal; i <= angkaAkhir; i++) {
    if (isBilanganPrima(i)) {
      bilanganPrima.push(i);
    }
  }

  return {
    angkaAwal: angkaAwal,
    angkaAkhir: angkaAkhir,
    bilanganPrima: bilanganPrima,
  };
};

// COBA DISINI =====================================================
const start: number = 1;
const end: number = 100;

console.log(listBilanganPrima(start, end));
