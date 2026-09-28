String nama = "Budi";
final String KAMPUS = "Telkom University";
int umur = 21;
umur = 22;

let nama = "Budi";
const KAMPUS = "Telkom University"; 
let umur = 21;
umur = 22;
umur = "Dua Puluh Dua";

// ------------------

int angka = 5;

console.log(5 == "5");
console.log(5 === "5");

// -------------------

public class Mahasiswa {
    public String nama;
    public String nim;

    public Mahasiswa(String nama, String nim) {
        this.nama = nama;
        this.nim = nim;
    }
}
Mahasiswa mhs = new Mahasiswa("Andi", "1301223001");

const mhs = {
    nama: "Andi",
    nim: "1301223001"
};

mhs.jurusan = "RPL";
console.log(mhs.nama);

// --------------------

public class Kalkulator {
    public static int tambah(int a, int b) {
        return a + b;
    }
}

const tambah = (a, b) => a + b;

const angka = [1, 2, 3];
angka.forEach((item) => {
    console.log(item * 2);
});