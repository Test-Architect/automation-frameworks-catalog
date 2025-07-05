import { Given, Then, When } from '@wdio/cucumber-framework';
import googleHomePage from '@pages/google-home.page.ts';

Given("I am on Google home page", async () => {
    await googleHomePage.navigate();
    await googleHomePage.waitForIsShown();
});

When("I search for {string}", async (term: string) => {
    await googleHomePage.search(term);
    
});

Then("I see the results", async () => {
    await googleHomePage.waitForIsShown();
    let stats = await googleHomePage.getResultStats();
    expect(stats).toEqual(true);
});