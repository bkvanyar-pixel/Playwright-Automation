import { test, expect } from '@playwright/test'
import { HomePage } from "../pageObjects/HomePage"
import { RegistrationPage } from '../pageObjects/RegistrationPage'
test('tcregister', async ({ page }) => {
    const homepage = new HomePage(page)

    await homepage.goTo()
    await homepage.clickRegisterLink()

    const registerpage = new RegistrationPage(page)
   await registerpage.registerUser('jhon', 'saw', 'texas', 'canada',
        'usa', '1232434', '44123068', '111111', 'js13', 'asdf')

    await registerpage.clickOnRegisterButton()

     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
     await page.waitForTimeout(2000)
})