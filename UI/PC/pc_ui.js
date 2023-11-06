module.exports = {
    'Google Search Test': function (browser) {
      // Open the Google website
      browser.url('https://www.google.com');
  
      // Wait for the search input field to be visible and interactable
      browser.waitForElementVisible('input[name="q"]', 5000);
  
      // Enter the search query "Nightwatch.js" into the search input
      browser.setValue('input[name="q"]', 'Nightwatch.js');
  
      // Simulate pressing the "Enter" key to perform the search
      browser.keys(browser.Keys.ENTER);
  
      // Wait for the search results page to load
      browser.waitForElementVisible('#search', 5000);
  
      // Assert that the page title contains "Nightwatch.js"
      browser.assert.title('Nightwatch.js - Google Search');
  
      // Take a screenshot for reference (optional)
      browser.saveScreenshot('google_search.png');
  
      // End the test
      browser.end();
    }
  };
  