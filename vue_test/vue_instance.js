let data = {a : 1}

const vm = new Vue({
  el : '#vm_id',
  data : data
})


// same obj
console.log('same obj vm.a === data.a',vm.a === data.a)

// 속성 설정은 원본 데이터에도 영향
vm.a = 2
console.log('속성 설정은 원본 데이터에도 영향 data.a',data.a)
data.a = 3
console.log('마찬가지로...',data.a)


let obj = {
  foo : 'bar'
}

Object.freeze(obj)

new Vue({
  el : "#vm_id2",
  data : obj
})


let data2 = {a : 1}
let vm2 = new Vue({
  el : '#vm_id3',
  data : data2
})

console.log('vm2.$data === data2',vm2.$data === data2)
console.log('vm2.$el === document.getElementById("vm_id3")',vm2.$el === document.getElementById('vm_id3'))
vm2.$watch('a', function(newVal, oldVal){
  console.log(`Watch changing a val, oldVal : ${oldVal} newVal : ${newVal}`)
})