# nodejs-jest-ts-selenium-skeleton-project

Node.js skeleton for browser tests written in TypeScript. Jest runs them with the `ts-jest` preset. The sample in `main.test.ts` starts Chrome through Selenium WebDriver (`selenium-webdriver` 4.4.0) so you can replace the empty page URL and element id with a real check.

The npm package name is `bot` at version 1.0.0. `package.json` sets `"main": "index.js"`. That file is not in this repo, and there is no application server or CLI.

## Prerequisites

- Node.js in the range Jest 27.5.1 declares: `^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0`
- npm
- Google Chrome
- ChromeDriver available on your `PATH`

`main.test.ts` builds the driver with `Capabilities.chrome()`. selenium-webdriver 4.4.0 starts Chrome by looking up `chromedriver` on `PATH`.

`package.json` also depends on `geckodriver` and `supertest`. The sample test does not import either package.

## Install, build, run, and test

Install the locked dependencies:

```bash
npm install
```

This repo has no `build` script and no `start` script. `tsconfig.json` points `tsc` at `main.test.ts`. Typecheck with:

```bash
npx tsc --noEmit
```

Run the only npm script. It executes `jest --detectOpenHandles`. `jest.config.js` sets `testTimeout` to 30000 milliseconds.

```bash
npm run test
```

Chrome and ChromeDriver have to be on the machine. If ChromeDriver is missing from `PATH`, Jest fails while loading `main.test.ts` with: `The ChromeDriver could not be found on the current PATH.`

## Usage

`main.test.ts` is the test file. It does the following:

1. Calls `jest.useFakeTimers()`. The file comment says tests that use `setTimeout` error without this.
2. Builds one Chrome driver at load time: `new Builder().withCapabilities(Capabilities.chrome()).build()`.
3. Quits that driver in `afterAll`.
4. In the `do something` test, calls `driver.get('')` and `driver.findElement(By.id(""))`. Both arguments are empty placeholders. Put the page URL in `driver.get` and the element id in `By.id`.
5. Asserts `expect(foo).toEqual("")`. `findElement` is not awaited, so `foo` is the promise `findElement` returns.

Jest settings in `jest.config.js`:

- `preset`: `ts-jest`
- `testEnvironment`: `node`
- `testTimeout`: `30000`

`tsconfig.json` sets `esModuleInterop` and includes `main.test.ts`. `jsconfig.json` sets the same compiler option and lists the same file.

## Layout

- `main.test.ts`: sample Selenium test
- `jest.config.js`: Jest and ts-jest settings
- `tsconfig.json`: TypeScript project for `main.test.ts`
- `jsconfig.json`: editor settings for the same file
- `package.json`: package metadata, the `test` script, and the ISC license field
- `package-lock.json`: lockfile version 2
- `.gitignore`: ignores `/node_modules`

## License

`package.json` sets `"license": "ISC"`. This repository does not include a `LICENSE` file.
