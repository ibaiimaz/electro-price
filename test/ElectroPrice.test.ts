import { beforeAll, describe, expect, test } from "@jest/globals";
import { configure } from "approvals";
import { JestReporter } from "approvals/lib/Providers/Jest/JestReporter";
import { verifyAllCombinations5 } from "approvals/lib/Providers/Jest/CombinationApprovals";
import { Device } from "../src/device";
import { ElectroPrice } from "../src/electro-price";
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";


describe("ApprovalTests", () => {
  beforeAll(() => {
    configure({
      reporters: [new JestReporter()],
    });
  });

  test.skip("JsonVerify", () => {
    const result = calculatePrice("Heater", 1501, 5000, "D", "spring");

    verify(result);
});

  test("Combination", () => {
    const names = [
      "foo",
      "TV",
      "Heater",
      "Fan",
    ];
    const basePrices = [100, 1501];
    const weights = [199, 200, 999, 1000, 4999, 5000];
    const energyCertificates = ["A", "B", "C", "D", "E", "F"];
    const seasons = ["spring", "summer", "autumn", "winter"];

    verifyAllCombinations5(calculatePrice, names, basePrices, weights, energyCertificates, seasons);
  });

  const calculatePrice = (name: string, basePrice: number, weight: number, energyCertificate: string, season: string) => {
    const device = new Device(name, basePrice, weight, energyCertificate);
    const electroPrice = new ElectroPrice(device);
    return electroPrice.calculate(season).toString();
  }
});

