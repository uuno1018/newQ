<template>
  <div class="home">
    <h1>ToDoリスト</h1>
    <div class="nyuryoku">
    <input v-model="tt" type="text" placeholder="やること入力">
    <button @click="toadd">追加</button>
    </div>
    <div class="todo" v-for="todo in todos" :key="todo.key">
      <p>{{todo.to}}</p>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data(){
    return{
      todos: [],
      tt:""
    };
  },
  methods:{
    toadd(){
      var db = firebase.firestore();
      db.collection("todos")
        .add({
          todo:this.tt
        })
    },
    async get(){
      var db = firebase.firestore();
      db.collection("todos")
        .get()
        .then(query => {
          query.forEach(doc => {
          var data = doc.data();
          this.todos.push(data);
        })
      })
    },
  created(){
    this.get();
  }
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
input{
  border: gray 1px solid;
  border-radius: 10px;
  padding: 5px;
  width: 80%;
}
button{
  width: 15%;
  cursor: pointer;
  padding: 3px 5px;
  border: 1px gray solid;
  border-radius: 5px;
  background-color: white;
  color: gray;
  transition: 0.3s;
}
button:hover{
  color: white;
  background-color: grey;
  border: 1px white solid;
}
.todo{
  color: black;
}
</style>
