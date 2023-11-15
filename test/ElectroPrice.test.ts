import { beforeAll, describe, test } from "@jest/globals";
import { configure } from "approvals";
import { JestReporter } from "approvals/lib/Providers/Jest/JestReporter";
import { verifyAllCombinations5 } from "approvals/lib/Providers/Jest/CombinationApprovals";

describe("ApprovalTests", () => {
    beforeAll(() => {
        configure({
            reporters: [new JestReporter()],
        });
    });

    test("Combination", () => {
        const names = [];
        const basePrices = [];
        const weights = [];
        const energyCertificates = [];
        const seasons = [];

        verifyAllCombinations5(calculatePrice, names, basePrices, weights, energyCertificates, seasons);
    });

    const calculatePrice = (name: string, basePrice: number, weight: number, energyCertificate: string, season: string) => {
    }
});
