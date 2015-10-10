var blockapps = require("blockapps-js");
var Promise = require("bluebird");
var contract = blockapps.Solidity.attach({"code":"contract Option{\n  address buyer;\n  address seller;\n  uint expiration;\n  uint asset;\n  bytes32 error;\n\n  function setAddresses(address registeredSeller, address registeredBuyer){\n    buyer = registeredBuyer;\n    seller = registeredSeller;\n  }\n  function setExpirationTime(uint expirationSeconds){\n    expiration = block.timestamp + expirationSeconds;\n  }\n\n  function saveAsset(uint assetValue){\n    asset = assetValue;\n  }\n\n  function createOption(address registeredSeller, address registeredBuyer, uint expirationSeconds, uint assetValue){\n    saveAsset(assetValue);\n    setAddresses(registeredSeller,registeredBuyer);\n    setExpirationTime(expirationSeconds);\n  }\n\n  function exercise(){\n    if (now > expiration){\n      buyer.send(asset);\n    }\n    else {\n      error = \"Option has not expired!\";\n    }\n  }\n\n\n}","name":"Option","vmCode":"606060405261020c806100136000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900480638835e58e1461006557806390107afe1461008a578063bf170112146100a3578063c0cc365d146100b6578063d32cb0fe146100c957610063565b005b61008860048035906020018035906020018035906020018035906020015061014f565b005b6100a16004803590602001803590602001506100d6565b005b6100b4600480359060200150610141565b005b6100c7600480359060200150610131565b005b6100d4600450610172565b005b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5050565b8042016002600050819055505b50565b806003600050819055505b50565b61015881610141565b61016284846100d6565b61016b82610131565b5b50505050565b6002600050544211156101de57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000600360005054604051809050600060405180830381858888f1935050505050610209565b7f4f7074696f6e20686173206e6f742065787069726564210000000000000000006004600050819055505b5b56","symTab":{"setExpirationTime":{"functionDomain":[{"atStorageKey":"0","bytesUsed":"20","jsType":"Int","solidityType":"uint256"}],"functionArgs":["expirationSeconds"],"functionHash":"c0cc365d","bytesUsed":"0","jsType":"Function","solidityType":"function(uint256) returns ()"},"createOption":{"functionDomain":[{"atStorageKey":"0","bytesUsed":"14","jsType":"Address","solidityType":"address"},{"atStorageKey":"1","bytesUsed":"14","jsType":"Address","solidityType":"address"},{"atStorageKey":"2","bytesUsed":"20","jsType":"Int","solidityType":"uint256"},{"atStorageKey":"3","bytesUsed":"20","jsType":"Int","solidityType":"uint256"}],"functionArgs":["registeredSeller","registeredBuyer","expirationSeconds","assetValue"],"functionHash":"8835e58e","bytesUsed":"0","jsType":"Function","solidityType":"function(address,address,uint256,uint256) returns ()"},"setAddresses":{"functionDomain":[{"atStorageKey":"0","bytesUsed":"14","jsType":"Address","solidityType":"address"},{"atStorageKey":"1","bytesUsed":"14","jsType":"Address","solidityType":"address"}],"functionArgs":["registeredSeller","registeredBuyer"],"functionHash":"90107afe","bytesUsed":"0","jsType":"Function","solidityType":"function(address,address) returns ()"},"error":{"atStorageKey":"4","bytesUsed":"20","jsType":"Bytes","solidityType":"bytes32"},"asset":{"atStorageKey":"3","bytesUsed":"20","jsType":"Int","solidityType":"uint256"},"expiration":{"atStorageKey":"2","bytesUsed":"20","jsType":"Int","solidityType":"uint256"},"seller":{"atStorageKey":"1","bytesUsed":"14","jsType":"Address","solidityType":"address"},"saveAsset":{"functionDomain":[{"atStorageKey":"0","bytesUsed":"20","jsType":"Int","solidityType":"uint256"}],"functionArgs":["assetValue"],"functionHash":"bf170112","bytesUsed":"0","jsType":"Function","solidityType":"function(uint256) returns ()"},"exercise":{"functionDomain":[],"functionArgs":[],"functionHash":"d32cb0fe","bytesUsed":"0","jsType":"Function","solidityType":"function() returns ()"},"buyer":{"atStorageKey":"0","bytesUsed":"14","jsType":"Address","solidityType":"address"}},"address":"706b4ba9d09b78e7498a8869a33d79b5dfcc2e9f"});
blockapps.query.serverURI = 'http://hacknet.blockapps.net';

var eth = blockapps.ethbase.Units.unitSchema.ether;
var globalKeystore;
var developerKeystore = '{"encSeed":{"encStr":"U2FsdGVkX19amD7FLNJwMmFtRd8SWyLyIZdhX0rO7d+6fNc78WCbVW5Mhj8y05eCWPQyhYFwJjz9A5rKeAGnIciQizHp27j8GD93dxOf7DQLJu2saeJqrAWrXlt8lF4Y","iv":"014e09ada05025447e93c6926e801063","salt":"5a983ec52cd27032"},"encMasterPriv":{"encStr":"U2FsdGVkX1+Wi/xiYZCPvnFgitWUneU/lYIc+2Gv0skKeXMqNzIJnKlD+kfFHDbqfZCU3/cOQKzHM3a5MBVXPbThO8pClsh6PhCgvXRNs5GIXbe7xV1jFT7hFcTO9CFj7j/fKOWQI7A1qjdzYKRoqEyjGfw+ryKJ69ilYFPlJ60=","iv":"fc0af7521ad27405c21abb6b215faa57","salt":"968bfc6261908fbe"},"keyHash":"67c70373cd9ee663f548661eca1493fce9d7059d3b6a84f1d9af77106380147369a7cf141e723b0ed392582bf10e420927034d2745ea2b781e78c07fe61452c9","salt":{"words":[1366481991,1392972653,1661407215,-1866231465],"sigBytes":16},"hdIndex":1,"encPrivKeys":{"d2600f116b6c47926ee1f954959506710f50a8f9":{"key":"U2FsdGVkX19P+tLvkUiJ7kEqFtXITMk07DP/tW4I6KgXJRGdkaDWGX2ZQHbL6vryHT0RRYM5IY+uDJY/pwZ96g==","iv":"207efc9f93a0ac4622ab83c7b194f3b8","salt":"4ffad2ef914889ee"}},"addresses":["d2600f116b6c47926ee1f954959506710f50a8f9"]}';

function submit() {
    var userObj = {
        app: appCreateUser.value,
        email: emailCreateUser.value,
        loginpass: loginpassCreateUser.value,
        address: addressCreateUser.value,
        enckey: enckeyCreateUser.value
     };
    /*global function from registerUser.js */
    submitUser(userObj, function (res) {
        var data = JSON.parse(res);
        createUserDiv.style.display = "none";
        var para = document.createElement("P");
        para.setAttribute("id","walletCreateMessage");
        var t = document.createTextNode("Confirm in your email. This is your new wallet file: \n\n" + res);
        para.appendChild(t);
        document.body.appendChild(para);
        console.log("wallet: " + data.encryptedWallet);
        console.log("addresses: " + JSON.parse(data.encryptedWallet).addresses);
        
        var faucetAddr = JSON.parse(data.encryptedWallet).addresses[0];
        console.log("sending faucet request");
        blockapps.routes.faucet(faucetAddr).then(function() {
            console.log("faucet should have worked");
        });
    });
};

function showRegister() {
    keygenDiv.style.display = "table";
    loginDiv.style.display = "none";
    hideAuthButtons();
}

function showLogin() {
    createUserDiv.style.display = "none";
    if (typeof walletCreateMessage !== "undefined") walletCreateMessage.style.display = "none";
    keygenDiv.style.display = "none";
    loginDiv.style.display = "table";
    walletDiv.style.display="none";
    hideAuthButtons();
    hideFunctions();

};

function hideOnLoad() {
    createUserDiv.style.display = "none";
    walletDiv.style.display = "none";
    loginDiv.style.display = "none";
    functionsDiv.style.display = "none";
    keygenDiv.style.display = "none";
    walletPassword.style.display = "none";
}

function hideAuthButtons() {
    authButtonDiv.style.display = "none";
}

function hideFunctions() {
    functionsDiv.style.display = "none";
    walletPassword.style.display = "none";
}

function genKeyUser() {
    console.log("moving from keygen to create user");
    createUserDiv.style.display = "table";
    keygenDiv.style.display = "none";
    genKey(keypass.value, function (keystore) {
        addressCreateUser.value = keystore.addresses[0];
        enckeyCreateUser.value = keystore.serialize();
  
  });
};

function retrieve() {
    var userObj = {
        app : appLogin.value,
        email : emailLogin.value,
        loginpass : loginpassLogin.value,
        address : addressLogin.value
    };
    retrieveUser(userObj,function (keystore) {
        loginDiv.style.display = "none";
        walletaddress.value=keystore.addresses[0];
        walletDiv.style.display="block"
        loginDiv.style.display = "none";
        walletPassword.style.display = "block";
        globalKeystore = keystore;
        functionsDiv.style.display = "table";
        $('#passwordModal').modal('show')
    });
}

function developerRetrieve() {
    console.log("developer keystore: " + JSON.stringify(developerKeystore));
    loginDiv.style.display="none";
    walletaddress.value=JSON.parse(developerKeystore).addresses[0];
    walletDiv.style.display="block"
    loginDiv.style.display = "none";
    walletPassword.style.display = "block";
    globalKeystore = ethlightjs.keystore.deserialize(developerKeystore);
    functionsDiv.style.display = "table";
    hideAuthButtons();
    $('#passwordModal').modal('show')
}

function callFunc(funcName) {
    console.log("globalKeystore: " + JSON.stringify(globalKeystore));

    try {
        var privkey = globalKeystore.exportPrivateKey(
            walletaddress.value, document.getElementById("walletDecrypt").value);
        console.log("privkey: " + privkey);
    } catch (e) {
        $('#passwordModal').modal('show')
    }

    var args = [];
    var funcDivElts = document.getElementById(funcName + "Div").children;
    var len = funcDivElts.length;

    for (var i = 1; i < len-1; ++i) { // Skip the button and the value text input
        args.push(funcDivElts[i].value);
    }

    contract.state[funcName].apply(null,args).txParams({value : funcDivElts[len-1].value * eth}).callFrom(privkey).then(afterTX);
}

function storageAfterTX(result) {
    var afterTXstring = "TX returned: " +
        ((result === undefined) ? "(nothing)":result);

    return Promise.props(contract.state).then(function(sVars) {
        afterTXstring += "\n\n Contract storage state:\n\n";
        for (name in sVars) {
            var svar = sVars[name]
            if (typeof svar === "function") {
                continue;
            }
            afterTXstring += "  " + name + " = " + svar + "\n";
        };
      return afterTXstring;  
    });
} 

function contractBalanceAfterTX(txString) {
    return contract.account.balance.then(function(bal) {
        return txString + "\n Contract balance =  " + (bal / eth) + " ether\n";
    });
}

function userBalanceAfterTX(txString) {
    return blockapps.ethbase.Account(globalKeystore.addresses[0]).balance.then(function(userBal) {
        return txString + "\n Your balance     =  " + (userBal / eth) + " ether\n";
    });
}

function resetTextArea(txString)  {
    document.getElementById("afterTXarea").textContent = txString;
}

function afterTX(result) {
    storageAfterTX(result)
      .then(function (txStr) { 
          return contractBalanceAfterTX(txStr);
        })
      .then(function (txStr) { 
          return userBalanceAfterTX(txStr);
        })
      .then(function (txStr) { 
          resetTextArea(txStr);
      });
} 
