import ConfigManager from "../config/manager.conf.ts";
import BasePage from "./base.page.ts";
import { Key } from 'webdriverio'

class GoogleHomePage extends BasePage {
    constructor() {
        super("textarea[name='q']");
    }

    private get searchBox() {
        return $("textarea[name='q']");
    }

    private get resultStats() {
        return $("#search");
    }

    async navigate() {
        await browser.url(ConfigManager.get("BASE_URL"));
    }

    async search(terms: string) {
        await this.searchBox.setValue(terms);
        await browser.keys(Key.Enter);
    }

    async getResultStats(): Promise<boolean> {
        return this.resultStats.isDisplayed()
    }
}

export default new GoogleHomePage();