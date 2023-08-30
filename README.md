# Deskripsi

coding challange mingguan SMK.DEV, kalau mau dicoba bisa ganti angkanya di variabel `start` & `end` nya dipaling bawah
contoh:
```js
const start: number = 1;
const end: number = 100;
```

## Tech Stack

**Language:** Typescript, Node.js

## Full Code Preview

```ts
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


// @im.waky
// Muhammad Hilmi
// SMK MADINATULQURAN
```

## Cara Jalanin

Clone projectnya kalau mau

```bash
  git clone https://github.com/Wakype/SMK.DEV-Challange-7350.git
```

terus masuk ke foldernya

```bash
  cd SMK.DEV-Challange-7350
```

Kalau mau di coba di install dulu packagenya

```bash
  npm install
```

Abis itu tinggal jalanin deh :)

```bash
  npm run build
  npm run dev
```

## Contoh
<img width="377" alt="Screenshot 2023-08-30 at 11 03 54" src="https://github.com/Wakype/SMK.DEV-Challange-7350/assets/94674924/243aaf79-82f9-4283-81c7-1b0b6d43f7c8">
