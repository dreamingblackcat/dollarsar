// Vue.component('converter', {
//   template: '#converter-template',
//   props: ['currency_name', 'rate', 'bank_name'],
//   data: function(){
//     return {
//       type: "buy",
//       foreignAmount: 1 ,
//       mmkAmount: ""
//     };
//   },
//   computed: {
//     mmk: function(){
//       return this.foreignAmount * this.rate[this.type]; 
//     } 
//   },
//   beforeUpdate: function(){
//     if (this.type == "buy") {
//       this.foreignAmount = accounting.unformat(this.foreignAmount);
//       this.mmkAmount = accounting.formatMoney( this.foreignAmount
//                          * +(this.rate[this.type]),
//                          "MMK "
//                        );
//     } else {
//       this.mmkAmount = accounting.unformat(this.mmkAmount);
//       this.foreignAmount = accounting.formatMoney( this.mmkAmount / +(this.rate[this.type]));
//     }
//   }
// });

new Vue({
  el: '#app',
  data: {
    message: {},
    moment: moment,
    accounting: accounting,
    isBuyMode: true,
    bank: {},
    currentCurrency: "USD",
    foreignAmount: 1
  },
  created: function(){
    console.log("Created");
    this.getLatestRate(); 
  },
  computed: {
    currentRate: function() {
      var self = this;
      var key  = this.isBuyMode ? 'buy' : 'sell';
      if (this.bank && this.bank.rates) {
        return this.bank.rates.filter( function(type) {
          return type.currency_shortcode == self.currentCurrency
        })[0][key]
      } else {
        return 1;
      }
      
    },
    mmkAmount: function() {
      return this.currentRate * this.foreignAmount;
    },
    mmkColor: function() {
      switch(this.currentCurrency) {
        case 'USD':
           return "green";
        case 'SGD':
          return "blue";
        case 'EUR':
          return "yellow"
      }
    }
  },
  methods: {
    getLatestRate: function () {

      // this.$http.get("http://c.yelinaung.com/api/v1/latest")
      this.$http.get("http://localhost:8000/api/v1/latest")
                .then(function(res){
                  this.message = res.body.data; 
                  this.bank = this.message.currencies[0];
                }.bind(this));
    },
    setCurrency: function(currency) {
      this.currentCurrency = currency;
    },
    setBank: function(bank) {
      this.bank = bank;
    },
    setBuyMode: function(mode) {
      console.log("Setting Mode ", mode);
      this.isBuyMode = mode;
    },
    resetAmount: function() {
      this.foreignAmount = 1;
    }
  } }); 

