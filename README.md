## Features

+ Leverages the Ethereum protocol & Solidity to create smart option contracts.
+ Uses BlockApps' STRATO platform and the [BlockApps JavaScript API](https://github.com/blockapps/blockapps-js) to interface with the Ethereum blockchain. 
+ Integrated with Coinbase for user-authentication and access to Bitcoin wallets. 
+ Built with a Ruby on Rails back-end to support the platform and improve the user experience. 

## Build Instructions

1. __Slash Options__ runs on Rails (~ 4.2.0) and requires [Bundler](http://bundler.io/)
2. Create a [Coinbase sandbox](https://sandbox.coinbase.com/) account (create multiple accounts to test trading).
3. Install dependencies with `bundle install` 
4. Prepare databases with `rake db:migrate`
5. Startup WEBrick server with `rails server` and explore the App!
