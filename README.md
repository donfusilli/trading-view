## Install

* Download zip and unzip.
* `cd /path/to/trading-view-master/`
* `npm install`

## Use

* Replace 'username' on line 13 in puppeteer.js with
 actual username
* Replace 'password' on line 14 in puppeteer.js with 
 actual password
* Save file
* `cd /path/to/trading-view-master/`
* `node puppeteer.js`

This will open a new tab in Chromium, navigate to tradingview.com, log in with username and password, and
then export data (option from the hamburger menu). Then
Chromium will close, and the downloaded file will be on
your computer in your usual folder for downloads.