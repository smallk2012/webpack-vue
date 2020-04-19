
<template>
    <div>
        <ol>
            <li v-for="(todo,index) in todos" :key="index">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="clickEvt">点击</button>
    </div>
</template>
 
<script>
export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: '不需要懂原理，也可以做出脚手架' },
          { text: '就像一名流水线工人一样，你知道怎么组装机器就行了，没必要理解零件怎么制造的' },
          { text: '制造零件的人不一定会组装，但是你对零件不够理解，制造零件的人一定不让你组装！——————切记现实' }
        ]
    }
  },
  methods:{
    clickEvt(){
        alert('越练越有经验');
    }
  }
}
</script>
