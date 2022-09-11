import { Builder, Capabilities, By } from 'selenium-webdriver'

jest.useFakeTimers() // tests with setTimeout will error without this

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

afterAll(async () => {
  driver.quit()
})

describe('It should...', () => {
    test('do something', async () => {
        await driver.get('') // url
        const foo = driver.findElement(By.id(""))
        expect(foo).toEqual("")
})
})

