import { Device } from "./device";

export class ElectroPrice {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    calculate(season: string) {
        let calculoFinal = 0;

        if (this.device.name === "Fan") {
            if (season !== "autumn" && season !== "winter") {
                if (season !== "spring") {
                    if (season === "summer") {
                        calculoFinal = this.device.basePrice * 1.3;
                    }
                }
            } else {
                calculoFinal = calculoFinal + this.device.basePrice;
            }

            if (season !== "autumn") {
                if (season !== "summer") {
                    calculoFinal = this.device.basePrice;
                }
                if (season === "winter") {
                    calculoFinal = calculoFinal * 0.7;
                }
            }

            calculoFinal = this.calculateEnergycCertificate(calculoFinal);
            calculoFinal = this.calculateWeightPrize(calculoFinal);
        } else if (this.device.name === "TV") {
            if (!(season !== "autumn" && season !== "winter")) {
                calculoFinal = calculoFinal + this.device.basePrice;
            }

            if (season !== "autumn") {
                calculoFinal = this.device.basePrice;
            }

            calculoFinal = this.calculateEnergycCertificate(calculoFinal);
            calculoFinal = this.calculateWeightPrize(calculoFinal);
        } else if (this.device.name === "Heater") {
            if (season !== "autumn" && season !== "winter") { } else {
                calculoFinal = calculoFinal + this.device.basePrice;
                calculoFinal = this.device.basePrice * 1.2;
            }

            if (season !== "autumn") {
                if (season === "spring") {
                    calculoFinal = this.device.basePrice;
                }
                if (season === "summer") {
                    calculoFinal = this.device.basePrice;
                    calculoFinal = calculoFinal * 0.8;
                }
            }

            calculoFinal = this.calculateEnergycCertificate(calculoFinal);
            calculoFinal = this.calculateWeightPrize(calculoFinal);
        } else {
            if (season !== "autumn" && season !== "winter") {
                if (season !== "spring") {
                    calculoFinal = calculoFinal + this.device.basePrice;
                }
            } else {
                if (this.device.name !== "Fan" && this.device.name !== "TV") {
                    calculoFinal = calculoFinal + this.device.basePrice;
                }
            }

            if (season !== "autumn") {
                if (season !== "summer" || this.device.name !== "Fan") {
                    calculoFinal = this.device.basePrice;
                }
                if (season === "summer") {
                    calculoFinal = this.device.basePrice;
                }
            }

            calculoFinal = this.calculateWeightPrize(calculoFinal);
        }

        return calculoFinal;
    }

    private calculateWeightPrize(calculoFinal: number) {
        if (this.device.basePrice <= 1500) {
            if ((this.device.weight >= 0) && (this.device.weight <= 199)) {
                calculoFinal = calculoFinal + 10;
            } else if ((this.device.weight >= 200) && (this.device.weight <= 999)) {
                calculoFinal = calculoFinal + 50;
            } else if ((this.device.weight >= 1000) && (this.device.weight <= 4999)) {
                calculoFinal = calculoFinal + 80;
            } else if ((this.device.weight >= 5000)) {
                calculoFinal = calculoFinal + 100;
            }

        }
        return calculoFinal;
    }

    calculateEnergycCertificate(calculoFinal: number) {
        if (this.device.energyCertificate === "A") {
            calculoFinal = calculoFinal + 100;
        } else if ((this.device.energyCertificate === "C")) {
            calculoFinal = calculoFinal + 60;
        } else if ((this.device.energyCertificate === "B")) {
            calculoFinal = calculoFinal + 80;
        } else if ((this.device.energyCertificate === "D")) {
            calculoFinal = calculoFinal + 50;
        } else if ((this.device.energyCertificate === "E")) {
            calculoFinal = calculoFinal + 30;
        } else {
            calculoFinal = calculoFinal + 10;
        }
        return calculoFinal;
    }
}