import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test.describe('Search Tutorials on Tutorialspoint', () => {
  test('should search for a tutorial and validate results', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    // Navigate to the homepage
    await homePage.navigateToHomePage();

    // Perform a search
    const searchQuery = 'Python';
    await homePage.searchForTutorial(searchQuery);

    // Validate the search results
    const resultsCount = await searchResultsPage.getResultsCount();
    expect(resultsCount).toBeGreaterThan(0);

    const firstResultTitle = await searchResultsPage.getFirstResultTitle();
    expect(firstResultTitle).toContain(searchQuery);
  });
});
