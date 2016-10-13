Vue.component('converter', {
  template: '#converter-template',
  props: ['currency_name', 'rate', 'bank_name'],
  data: function(){
    return {
      type: "buy",
      foreignAmount: 1 ,
      mmkAmount: ""
    };
  },
  computed: {
    mmk: function(){
      return this.foreignAmount * this.rate[this.type]; 
    } 
  },
  beforeUpdate: function(){
    if (this.type == "buy") {
      this.foreignAmount = accounting.unformat(this.foreignAmount);
      this.mmkAmount = accounting.formatMoney( this.foreignAmount
                         * +(this.rate[this.type]),
                         "MMK "
                       );
    } else {
      this.mmkAmount = accounting.unformat(this.mmkAmount);
      this.foreignAmount = accounting.formatMoney( this.mmkAmount / +(this.rate[this.type]));
    }
  }
});

new Vue({
  el: '#app',
  data: {
    message: {},
    moment: moment
  },
  created: function(){
    console.log("Created");
    this.getLatestRate(); 
  },
  methods: {
    getLatestRate: function () {

      this.$http.get("http://localhost:8000/api/v1/latest")
                .then(function(res){
                  this.message = res.body.data; 
                }.bind(this));
    }
  } }); 

