const { chromium } = require('playwright')

jest.setTimeout(20000)

let browser
let page
const serverUrl = 'http://localhost:3000'

beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
})

//tests
test('User can click button and load the solar system', async () => {
  await page.goto(serverUrl)

  await Promise.all([page.waitForNavigation(), page.click('text=BLAST OFF')])
  expect(await page.url()).toContain('http://localhost:3000/solarsystem')
})
