@googleSearch
Feature: Google Search
    @googleSearch
    Scenario: Search for Playwright on Google
        Given I am on Google home page
        When I search for "WebdriverIO"
        Then I see the results