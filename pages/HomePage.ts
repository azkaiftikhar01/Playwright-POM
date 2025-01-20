import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: string;
  readonly searchButton: string;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = 'input[name="search"]';
    this.searchButton = 'button[type="submit"]';
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.tutorialspoint.com');
  }

  async searchForTutorial(query: string) {
    await this.page.fill(this.searchInput, query);
    await this.page.click(this.searchButton);
  }
}
