var  class1 = new Vue({
  el : '#class1', // el 미 지정시 에러가 없
  data : {
    isActive : true,
    error : null
  },
  computed :{
    classObject : function(){
      return {
        active : this.isActive && !this.error,
        'text-danger' : this.error && this.error.type === 'fatal'
      }
    }
  }
})

var  class2 = new Vue({
  el : '#class2', // el 미 지정시 에러가 없
  data : {
    activeClass : 'active',
    errorClass : 'text-danger',
    isActive : false
  },
  // computed :{
  //   classObject : function(){
  //     return {
  //       active : this.isActive && !this.error,
  //       'text-danger' : this.error && this.error.type === 'fatal'
  //     }
  //   }
  //}
})


Vue.component('my-component', {

  template : '<p class="foo bar">Hi</p>'
})

var class3 = new Vue({
  el : '#class3',
  data : {
    isActive : false
  },


})
//<my-component class="baz boo"></my-component> 미리 선언 해둔거에 추가로 클래스가 붙


var style1 = new Vue({
  el : '#style1',
  data : {
    activeColor : 'red',
    fontSize : 30
  }
})

var style2 = new Vue({
  el : '#style2',
  data : {
   styleObject : {
    color : 'green',
    fontSize : '30px'
   }
  }
})

var style3 = new Vue({
  el : '#style3',
  data : {
   styleObject : {
    color : 'green',
    fontSize : '30px'
   },
   baseStyleObject : {
    color : '#dfdfdf',
    fontSize : '56px'
   }
  }
})