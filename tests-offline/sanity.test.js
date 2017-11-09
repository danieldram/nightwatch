var nightwatch = require('nightwatch');

describe('rbauction', function() {
  var client = nightwatch.initClient({
    silent : true
  });

  var browser = client.api();

  it('Demo test GitHub', function (done) {
    browser
      .url('https://www.rbauction.com')
      .waitForElementVisible('body', 2000, function(){
        browser.assert.title('Used Heavy Equipment for Sale | Heavy Equipment Auctions | Ritchie Bros. Auctioneers')
        browser.closeWindow();
      
      }).end();

    client.start(done);
  });
});
