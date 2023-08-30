"use strict";
const isBilanganPrima = (angka) => {
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
const listBilanganPrima = (angkaAwal, angkaAkhir) => {
    const bilanganPrima = [];
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
const start = 1;
const end = 100;
console.log(listBilanganPrima(start, end));
