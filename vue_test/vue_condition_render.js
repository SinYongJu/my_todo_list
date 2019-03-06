var app = new Vue({
  el : '#app',
  data : {
    ok : false
  }
})

Vue.component('if_test' ,{
  template : '<div></div>'
})

var app2 = new Vue({
  el : '#app2',
  data : {
    ok : true
  }
})

var app3 = new Vue({
  el : '#app3',
  data : {
    value : Math.random()
  }
})

var app4 = new Vue({
  el : '#app4',
  data : {
    type : 'C'
  }
})
var app5 = new Vue({
  el : '#app5',
  data : {
    loginType : 'username'
  },
  methods : {
    change : function(){
     this.loginType === 'username'? this.loginType = '': this.loginType = 'username'
    }
  }
})

var app6 = new Vue({
  el : '#app6',
  data : {
    ok : false
  }
})