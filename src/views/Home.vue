<template>
  <div class="home">
    <h1>ToDoリスト</h1>
    <div class="nyuryoku">
    <input class="yarukoto" v-model="tt" type="text" placeholder="やること入力">
    <button @click="toadd">追加</button>
    </div>
    <div class="p">
    <p>終わったらチェックを入れてクリア</p>
    </div>
    <ul class="todo">
    <li class="to" v-for="todo in todos" :key="todo.key">
      <input type="checkbox" id="check" v-model="todo.check">
      <label for="check">{{todo.todo}}</label>
    </li>
    </ul>
    <div class="btn">
      <button @click="clear(todos)" class="a11">clear!</button>
      <button class="a11">過去にしたこと</button>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data(){
    return{
      todos: [],
      tt:"",
    };
  },
  methods:{
    async get(){
      var db = firebase.firestore();
      db.collection("todos")
        .get()
        .then(a => {
          a.forEach(doc => {
            var data = doc.data();
            this.todos.push(data);
          })
      })
    },
    toadd(){
      var db = firebase.firestore();
      db.collection("todos")
        .add({
          todo:this.tt
        })
        this.todos.push(this.tt);
        alert("追加しました");
        this.tt="";
    },
    clear(todos){
      console.log(this.todos);
      console.log("aaa");
      const newtodo = todos.filter(function(){
        return this.todo.check === false
      }
      )
      console.log(newtodo);
    }
  },
  created(){
    this.get();
  }
}
</script>
<style scoped>
.home{
  text-align: center;
  margin-top: 40px;
}
.nyuryoku{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
}
.yarukoto{
  border: gray 1px solid;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 5px;
  width: 89%;
}
button{
  width: 10%;
  cursor: pointer;
  padding: 3px 5px;
  border: 1px gray solid;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  color: gray;
  box-shadow: 0 4px;
}
button:active{
  position: relative;
  top: 4px;
  box-shadow: none;
}
.p{
  margin-top: 20px;
}
label{
  margin-left: 10px;
}
.to{
  width: 80%;
  margin: 20px auto;
  height: 30px;
  line-height: 30px;
  list-style:none;
  text-align: left;
}
.check{
  height: 12.67px;
  width: 12.67px;
  line-height: 30px;
  margin-right: 10px;
}
.btn{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto;
}
.a11{
  width: 47%;
}
</style>
