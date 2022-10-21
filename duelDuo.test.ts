
import { Builder, Capabilities, By } from "selenium-webdriver"


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Draw button displays "choices" div', async () => {
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
});

test('"Add to Duo" button displays "player-duo" div', async () => {
    const addToDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await addToDuo.isDisplayed()
    expect(displayed).toBe(true)
});