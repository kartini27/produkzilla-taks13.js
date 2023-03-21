//bikin loop sampe 1000
//kalau misal ketemu angka yang habis dibagi 3 outputkan => fizz
//kalau misal ketemu angka yang habis dibagi 5 outputkan => buzz
//kalau misal ketemu angka yang habis dibagi 3 dan 5 outputkan => fizzbuzz
//selain itu, outputkan angkanya

for (let angka = 1; angka <= 1000; angka++) {
    const fizz = angka % 3 === 0 ? 'fizz' : '';
    const buzz = angka % 5 === 0 ? 'buzz' : '';
    (fizz && buzz) && console.log(`${angka} = ${fizz}${buzz}`);
  }