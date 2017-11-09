const assert = require('assert');

describe('RBA Auction Calendar Old', ()=> {
    
    
    beforeEach((client, done) => {
        client.url('https://www.rbauction.com/myaccount?redirect=%2Fhome%2Fauth')
        .expect.element('body').to.be.present.before(5000)
        
        done();
      });
    
    it('Auction Calendar is Visible', (client)  => {
        client.setValue("input[type=text]", "ericchan@rbauction.com");
        client.setValue("input[type=password]", "password1")
        client.click("input[type=submit]");
        client.expect.element("#rba-auction-list-container").to.be.present.before(2000);
    });

    it("Shows number of upcoming auctions", (client) => {
        client.url('https://www.rbauction.com/home/auth')
        .expect.element('body').to.be.present.before(5000)
        client.expect.element("#auction-list-count").text.to.match(/[0-9]/g);
    });

    it("Regions filter is displayed and functions correctly", (client) => {
        client.url('https://www.rbauction.com/home/auth')
        .expect.element('body').to.be.present.before(5000)

        client.expect.element("#auction-list-filter").to.be.present;
        client.getText(".rba-portlet-header", (data)=>{
            console.log(data);
        })
    
        client.setValue("#auction-list-filter", "Canada").pause(5000)
        client.setValue("#auction-list-filter", "Mexico").pause(5000)

        client.getAttribute("#upcoming-auctions h3", "innerText", (data)=>{
             assert.equal(data.value, "Upcoming Auctions");
        })
    
        

    });

    
});