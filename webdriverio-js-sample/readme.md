# 🌐 WebdriverIO JS Sample UI Test Framework (Using Typescript + BDD Style)

A clean, scalable end-to-end **UI testing framework** using **WebdriverIO v9**, **Cucumber**, and **TypeScript**.  
Easily run tests across multiple browsers (Chrome, Edge), generate rich Allure reports, and dynamically target individual features.

---

## 🚀 Features

- ✅ **UI-Only E2E Testing** using WebdriverIO
- 🧠 **Cucumber + Gherkin** for behavior-driven scenarios
- 🌍 **Cross-browser support**: You can define your own config like in the sample
- 🔧 **Multiple Environment config**
- 📊 **Allure reporting** integration
- ⚡ **CI/CD ready** with clean scripting and dynamic `--spec` support
- 💻 **TypeScript-friendly** for strong typing and modern dev experience

---

## 📦 Prerequisites

- Node.js v18+
- npm v9+
- TS Knowledge / Or even JS knowledge still acceptable tho

---

## 🛠 Setup

```bash
# Clone the repo
git clone https://github.com/Test-Architect/automation-frameworks-catalog.git
cd webdriverio-js-sample

# Install dependencies
npm install
```
---

## ▶️ How to Run Tests (Configurable in package.json)
```bash
# Run a Specific Feature File
npm run test-chrome -- --spec ./tests/features/google-search.feature #using chrome browser config
npm run test-edge -- --spec ./tests/features/google-search.feature #using edge browser config

# Or you can run test specified in the package script in package.json
npm run test-google-chrome
npm run test-google-edge
```
---
## 🌱 Set Test Environment (Optional
```bash
# To set the environment before test execution (e.g., dev, qa): you can change it on package.json, change the TEST_ENV={env_you_want}
cross-env TEST_ENV=dev npm run test-chrome #dev
cross-env TEST_ENV=qa npm run test-chrome #qa

# Value highly configurable within .env file in the project
```
---
