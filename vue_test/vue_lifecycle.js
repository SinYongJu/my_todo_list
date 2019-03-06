// vue 에서는 this 컨텍스트가 호출하는 인스턴스에서 에로우 함수를 
// 사용할 경우 에러 남 

var vm_lf1 = new Vue({
  el : '#lf1',
  data : {
      a : 1
  },
  created : function(){
    console.log('a is '+ this.a+' created')
  },
  mounted : function(){
    // 컴포넌트 랜더링 시
    this.a = 3
    console.log('a is '+ this.a+' mounted')
  },
  destroyed : function(){
    
    // destroyed는 서버측에서는 호출 안됨 
    this.a = 4
    console.log('destroyed', this.a)
  }
})

// 추후 보완