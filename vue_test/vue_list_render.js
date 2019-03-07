var example1 = new Vue({
  el : '#example-1',
  data : {
    items : [
      { message : 'Foo' },
      { message : 'Bar' }
    ]
  }
})

var example2 = new Vue({
  el : '#example-2',
  data : {
    parentMessage : 'Parent',
    items : [
      { message : 'Foo' },
      { message : 'Bar' }
    ]
  }
})

var example3 = new Vue({
  el : '#example-3',
  data : {
    object : {
      firstName : 'John',
      lastName : 'Doe',
      age : 30
    }
  }
})

var example4 = new Vue({
  el : '#example-4',
  data : {
    items : {
      firstName : 'John',
      lastName : 'Doe',
      age : 30
    }
  }
})

var example4 = new Vue({
  el : '#example-4',
  data : {
    items : {
      firstName : 'John',
      lastName : 'Doe',
      age : 30
    }
  }
})

var example5 = new Vue({
  el : '#example-5',
  data : {
    items : [1,2,3,4,5,6,7]
  }
})
//example5.items[0] = 100; 결과 값 1
// example5.items = example5.items.filter(function(item){return item % 2 == 0})

Vue.set(example5.items, 0, 100)
example5.items.splice(4, 1, 6);
example5.items.splice(2)

var example6 = new Vue({
  el : '#example-6',
  data : {
    items : [1,2,3,4,5,6,7],
    userProfile : { 
      name : 'asd',
    },
  }
})

Vue.set(example6.userProfile, 'age', 27)

// example5.age = 10 ;


var example7 = new Vue({
  el : '#example-7',
  data : {
    numbers : [1,2,3,4,5]
  },
  // computed : {
  //   evenNumbers : function(){
  //     return this.numbers.filter(function (number){ return number % 2 === 0})
  //   }
  // }
  methods :{
    even : function(numbers){
      return this.numbers.filter(function (number){ return number % 2 === 0})
    }
  }
})


var example8 = new Vue({
  el : '#example-8'
})
var example9 = new Vue({
  el : '#example-9',
  data : {
    items : [
      {
        msg : 'hi',
        isComplete : true,
      },
      {
        msg : 'hi2',
        isComplete : false,
      },
      {
        msg : 'hi3',
        isComplete : true,
      },
      {
        msg : 'hi4',
        isComplete : false,
      }
    ]
  }
})

Vue.component('todo-item',{
  template : `\
    <li>\
    {{ title }}\
    <button type="button" v-on:click = "$emit(\'remove'\)">X</button>
    </li>\
    `
    ,
    props : ['title']
})
var example10 = new Vue({
  el : '#example-10',
  data : {
    newTodoText : '',
    todos : [
      {
        id : 1,
        title : 'do the dishes',
      },
      {
        id : 2,
        title : 'take out the trash',
      },
      {
        id : 3,
        title : 'Mow the lawn',
      }
    ],
    nextTodoId : 4
  },
  methods : {
    addNewTodo : function(){
      this.todos.push({
        id : this.nextTodoId++,
        title : this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})