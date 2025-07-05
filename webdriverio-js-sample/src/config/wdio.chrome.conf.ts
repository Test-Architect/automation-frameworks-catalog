import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [
        {
            browserName: "chrome",
            'goog:chromeOptions': {
                args: [
                    '--disable-blink-features=AutomationControlled'
                ]
            }
        }
    ]
};