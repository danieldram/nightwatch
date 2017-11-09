describe('Sorting of CI Search Results', function() {

    it('Sort By Lot Number, Low To High', function(client) {
      client.url('https://www.rbauction.com/?keywords=truck')
        .expect.element('body').to.be.present.before(5000)

        client.expect.element("#summary-result-count").to.be.present.before(5000);
        client.expect.element("#summary-result-count").text.to.not.equal('0');
        client.expect.element(".rba-results-sort").to.be.present.before(1000);
        client.click('.rba-results-sort option[value=lot_asc]')
        client.pause(1000)
        client.expect.element(".hf-top-margin").not.to.be.present;
    
    });


    it('Sort By Lot Number, High to Low', function(client) {
        client.url('https://www.rbauction.com/?keywords=truck')
          .expect.element('body').to.be.present.before(5000)
          
          client.expect.element("#summary-result-count").to.be.present.before(5000);
          client.expect.element("#summary-result-count").text.to.not.equal('0');
          client.expect.element(".rba-results-sort").to.be.present.before(1000);
          client.click('.rba-results-sort option[value=lot_desc]')
          client.pause(1000)
          client.expect.element(".hf-top-margin").to.be.present
      });

      


});