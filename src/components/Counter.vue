<template>
  <div>
    <h1>My Counter</h1>
    <div class="wrapper1" >
      <div class="counter" v-text="counter" > </div>
      <button class="minus"  @click="substractFromCounter(Value)" >-</button>
      <input type="number" name="number" v-model="value" id="number">
       <button class="plus" @click="addToCounter(Value)" >+</button>

    </div>
    <button @click="addRandomNumber" class="addRandomNumber" >Add Roudom number </button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      value:1
      
    }
  },
  computed: {
    ...mapState(['counter']),
    Value:{
      get(){
        return parseInt(this.value) ;
      },
      set(value){
        parseInt(value) ;
      }
    }
  },
  methods: {
    ...mapMutations(['addToCounter','substractFromCounter']),
    ...mapActions(['addRandomNumber'])
  },

}
</script>

<style scoped >
.wrapper1{
  margin: 1px 0px;

}
.wrapper1 > .counter{
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
  padding: 1rem;
}
.wrapper1 > button {
  border: 1px solid gold ;
  border-radius: 100px;
  text-align: center;
  padding: 0.5rem;
  margin: 1rem;
  cursor: pointer;
}
.wrapper1 > button:hover{
  background: #868686;
  color: #ffff;
}
.wrapper1 > input{
  padding: 0.4rem;
  font-size: 1rem;
  border: 1px solid black;
  text-align: center;
  margin: 0.5rem 1rem;
}

.addRandomNumber{
  background:#0f2f0f ;
  padding:0.5rem ;
  text-align:center;
  font-size: 1rem;
  font-weight: 700;
  color:#f0ff0f ;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

</style>