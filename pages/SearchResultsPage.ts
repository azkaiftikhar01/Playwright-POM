import { Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly resultsSection: string;
  readonly firstResultTitle: string;

  constructor(page: Page) {
    this.page = page;
    this.resultsSection = 'search-strings';
    this.firstResultTitle = 'div[class*="search-result"] h2 a';
  }

  async getResultsCount(): Promise<number> {
    return await this.page.locator(this.resultsSection).count();
  }

  async getFirstResultTitle(): Promise<string> {
    return await this.page.locator(this.firstResultTitle).innerText();
  }
}
