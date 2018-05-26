import EmbarkJS from 'Embark/EmbarkJS';
import $ from 'jquery';

// import your contracts
// e.g if you have a contract named SimpleStorage:
//import SimpleStorage from 'Embark/contracts/SimpleStorage';

$(document).ready(function() {
    web3.eth.getAccounts(function(err, accounts) {
        $('#queryBalance input').val(accounts[0]);
    });
});
