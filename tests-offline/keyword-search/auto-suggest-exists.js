describe('Auto Suggest Exists', function() {
  
    describe('with Nightwatch', function() {
  
      it('uses BDD to run the Google simple test', function(client) {
        client.url('http://www.rbauction.com')
          .expect.element('body').to.be.present.before(5000)
          
          client.expect.element("#rba-keyword-input").to.be.present.before(5000);
          client.setValue('#rba-keyword-input', ['truck', client.Keys.ENTER]).pause(1000);
          client.expect.element("#summary-result-count").to.be.present.before(5000);
          client.expect.element("#summary-result-count").text.to.not.equal('0');
          
      });

    });
  });