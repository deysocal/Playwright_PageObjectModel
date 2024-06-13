import { test, expect } from '@playwright/test';
import {LoginPage} from '../../page/login'

test('test', async ({ page }) => {

  const Login= new LoginPage(page)
  await Login.gotoLoginpage(page)
  await Login.login('tomsmith','SupersecretPassword')

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});