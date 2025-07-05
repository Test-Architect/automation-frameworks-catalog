import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [
        {
            browserName: "MicrosoftEdge",
            'ms:edgeOptions': {
                args: [
                    '--disable-blink-features=AutomationControlled'
                ]
            }
        }
    ]
};