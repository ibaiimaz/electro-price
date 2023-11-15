export class Device {
    name: string;
    basePrice: number;
    weight: number;
    energyCertificate: string;


    constructor (name: string, basePrice: number, weight: number, energyCertificate: string) {
        this.name = name;
        this.basePrice = basePrice;
        this.weight = weight;
        this.energyCertificate = energyCertificate;
    }
}
