# Playwright POM

A small end-to-end test suite written with Playwright and TypeScript, structured around the Page Object Model.

Page objects in `pages/` wrap each screen's locators and actions, so the specs in `tests/` read as user steps rather than selectors. The sample spec searches Tutorialspoint and checks the results.

## Run it

```bash
npm install
npx playwright install
npm test
```

## Layout

| Path | What |
|---|---|
| `pages/HomePage.ts` | Navigation and search on the home page |
| `pages/SearchResultsPage.ts` | Reading result counts and titles |
| `tests/searchTutorial.spec.ts` | Search a tutorial and validate the results |
| `playwright.config.ts` | Base URL, browsers and retries |
