# Dollarsar Exchange Rate Extension

- Dollarsar is a chrome extension that allows to convert foreign currency to Myanmar Kyats with exchange rates of different Myanmar banks. This extension uses @yelinaung 's  [currency exchange API](http://c.yelinaung.com/api/v1/latest) which scrapes various Myanmar bank's websites hourly for getting latest exchange rates.

#Installation

##Using Chrome Web Store

It hasn't been uploaded to Web Store yet. Coming Soon...

##Using Developer Mode

1. Clone this repo or [download as zip](https://github.com/dreamingblackcat/dollarsar/archive/master.zip). If downloaded as Zip file, extract the zip file first.
2. Open Chrome browser and go to `chrome://extensions/` url.
3. Check the Developer Mode checkbox at the top.
4. Click on the "Load unpacked extension" button.
5. Choose the cloned/extracted directory and click `select`. 
6. Then a browser action icon ![dollarsar](icon16.png) will show up.
7. Click the icon to use the converter.

# Technologies Used

- [MaterializeCSS](http://materializecss.com/) 
- [VueJS](https://vuejs.org)
- [MomentJS](http://momentjs.com/)
- [Accounting.js](http://openexchangerates.github.io/accounting.js/)

# Contributing

Contributions are highly welcomed. Please feel free to create an issue for any suggestion/bug report. To contribute code:

  1. Fork it
  2. Create your feature branch (`git checkout -b my-new-feature`)
  3. Commit your changes (`git commit -am 'Added some feature'`)
  4. Push to the branch (`git push origin my-new-feature`)
  5. Create a Pull Request to this repo's master branch

#Credits

- Extension icon is downloaded from [here](https://icons8.com/web-app/7391/currency-exchange)
- [Ye Lin Aung](https://github.com/yelinaung) for his awesome [API](http://c.yelinaung.com/api/v1/latest)

#License

This repo is released under MIT License which you can read [here](LICENSE)