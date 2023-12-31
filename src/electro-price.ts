import { Device } from "./device";

export class ElectroPrice {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    calculate(season: string) {
        let calculoFinal = 0;

        if (season !== "autumn" && season !== "winter") {
            if (season !== "spring") {
                if (this.device.name === "Fan") {
                    if (season === "summer") {
                        calculoFinal = this.device.basePrice * 1.3;
                    }
                } else {
                    if (this.device.name !== "TV" && this.device.name !== "Heater") {
                        calculoFinal = calculoFinal + this.device.basePrice;
                    }
                }
            }
        } else {
            if (this.device.name !== "Fan" && this.device.name !== "TV") {
                calculoFinal = calculoFinal + this.device.basePrice;
                if (this.device.name === "Heater") {
                    calculoFinal = this.device.basePrice * 1.2;
                }
            } else {
                calculoFinal = calculoFinal + this.device.basePrice;
            }
        }
        
        if (season !== "autumn") {
            if (this.device.name !== "Heater") {
                if (season !== "summer" || this.device.name !== "Fan") {
                    calculoFinal = this.device.basePrice;
                 }
            } else if (season === "spring") {
                calculoFinal = this.device.basePrice;
            }
            if (this.device.name === "Fan") {
                if (season === "winter") {
                    calculoFinal = calculoFinal * 0.7;
                }
            } else {
                if (season === "summer") {
                    if (this.device.name !== "TV") {
                        calculoFinal = this.device.basePrice;
                        if (this.device.name === "Heater") {
                            calculoFinal = calculoFinal * 0.8;
                        }
                    }
                }
            }
        }

        if (this.device.name === "TV" || this.device.name === "Heater" || this.device.name === "Fan") {
            if (this.device.energyCertificate !== "A" && this.device.energyCertificate !== "C") {
                if (this.device.energyCertificate !== "B" && this.device.energyCertificate !== "D") {
                    if (this.device.energyCertificate !== "E") {
                        calculoFinal = calculoFinal + 10;
                    } else {
                        calculoFinal = calculoFinal + 30;
                    }
                } else if (this.device.energyCertificate !== "B") {
                        calculoFinal = calculoFinal + 50;
                } else {
                    calculoFinal = calculoFinal + 80;
                }
            } else {
                if (this.device.energyCertificate === "C") {
                    calculoFinal = calculoFinal + 60;
                } else {
                    calculoFinal = calculoFinal + 100;
                }
            }
        }

        if ((this.device.weight >= 0) && (this.device.weight <= 199) && this.device.basePrice <= 1500) {
            calculoFinal = calculoFinal + 10;
        } else {
            if (this.device.basePrice <= 1500) {
                if ((this.device.weight >= 200) && (this.device.weight <= 999)) {
                    calculoFinal = calculoFinal + 50;
                }
                if ((this.device.weight >= 1000) && (this.device.weight <= 4999)) {
                    calculoFinal = calculoFinal + 80;
                } else {
                    if ((this.device.weight >= 5000)) {
                        calculoFinal = calculoFinal + 100;
                    }
                }
            }
        }

        return calculoFinal;
    }
}