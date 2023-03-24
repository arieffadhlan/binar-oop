class BangunDatar {
    constructor(name) {
		this.name = name;
	}
    
    introduce() {
		console.log(`Jenis Bangun Datar ${this.name}`);
	}
    
    luas() {
        return 0;
    }

    keliling() {
        return 0;
    }
}

class Lingkaran extends BangunDatar {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    luas() {
        return `Luas: ${Math.PI * (this.radius ** 2)}`;
    }
    
    keliling() {
        return `Keliling: ${2 * Math.PI * this.radius}`;
    }
}

class Persegi extends BangunDatar {
    constructor(name, sisi) {
        super(name);
        this.sisi = sisi;
    }

    luas() {
        return `Luas: ${this.sisi * this.sisi}`;
    }

    keliling() {
        return `Keliling: ${4 * this.sisi}`;
    }
}

class PersegiPanjang extends BangunDatar {
    constructor(name, panjang, lebar) {
        super(name);
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return `Luas: ${this.panjang * this.lebar}`;
    }

    keliling() {
        return `Keliling: ${2 * (this.panjang + this.lebar)}`;
    }
}


class Segitiga extends BangunDatar {
    constructor(name, luas, keliling){
        super(name)
        this.luas = luas
        this.keliling = keliling
    }

    SegitigaSikuSiku(a, t){
        this.luas = (1/2) * a * t
        this.keliling = a + t + Math.sqrt(a * a + t * t)
        this.introduce()
        console.log(`Luas = ${this.luas}`, `Keliling = ${this.keliling}`)
    }
}

console.log("")
let segitiga = new Segitiga('Segitiga Siku-Siku');
segitiga.SegitigaSikuSiku(15,10);
console.log("")

let circle = new Lingkaran("Lingkaran", 14);
circle.introduce();
console.log(circle.luas());
console.log(circle.keliling());
console.log("")

let rectangle = new Persegi("Persegi", 4);
rectangle.introduce();
console.log(rectangle.luas());
console.log(rectangle.keliling());
console.log("")

let rectangel2 = new PersegiPanjang("Persegi Panjang",8 , 4);
rectangel2.introduce();
console.log(rectangel2.luas());
console.log(rectangel2.keliling());