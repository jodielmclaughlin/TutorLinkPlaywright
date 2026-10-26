
// import { test as base } from '@playwright/test';
// import baseURL from ('playwright.config.js')

// exports.basetest = base.test.extend(
//     {
//         authenticatedPage: async({page}, use)=>
//         {
//             await page.goto(baseURL)
//         }
//     }
// )

import { test as base } from '@playwright/test';

export const customtest = base.extend({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);

    await page.close();
  },
});
//add expect to this export if imports on other pages gets messy
module.exports = {customtest};