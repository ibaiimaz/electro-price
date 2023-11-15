# Electro Price
Hau birfaktorizazio kata bat da heredatutako kodearekin lan egiten praktikatzeko. Askotan gertatu hoi den bezela, imaginatuko dugu bere garaian egon ziren eskakizunak zein izan ziren ez dakigula, eta proiektuan parte hartu zutenetako inor ez dagoela jadanik enpresan, baina inork ez dauka kexarik funtzionamenduarekin, beraz, egiten duena egiten duela, portaera mantendu behar dugu.

## Egin beharrekoa
- Kodea test bidez estali, inongo portaerarik aldatu gabe birfaktorizatu ahal izateko
- `ElectriPrice.test.ts` fitxategia prestaturik dago Approval testing teknika erabiliz testak idazteko, beraz, berau erabiltzea gomendatzen da
- Iruditzen zaizun moduan kodea birfaktorizatu, ulert-errazagoa izan dadin

## Nola erabili

### Dependentziak instalatu

```bash
npm install
```

### Testak behin exekutatu

```bash
npm test
```

### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

## sh

Testak ondoko komandoa erabiliz ere exekutatu daitezke:

```bash
$ ./run_tests.sh
```

> OHARRA: Poiektu hau [ApprovalTests.TypeScript.Jest.StarterProject templatea](https://github.com/approvals/ApprovalTests.TypeScript.Jest.StarterProject) erabiliz sortua izan da.

https://approvaltests.com/builds/
