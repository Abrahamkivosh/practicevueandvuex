import Axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter : 0,
    errors:[],
    history:[0]
  },
  getters:{
    getErrors:state=>{
      return state.errors.length > 0 ? state.errors : []
    },
    getIndexOfValue:state=>payload=>{
      let indexs = [];
       state.history.forEach((history,index)=>{
        if(history === parseInt(payload)  ){
          indexs.push(index);
        }
      });
      return indexs ;
    }
  

  },
  mutations: {
    addToCounter(state,payload){
      state.counter += payload ;
      state.history.push(state.counter)

    },
    substractFromCounter(state,payload){
      state.counter -= payload ;
      state.history.push(state.counter)

    },
    AddErrors(state,newError){
      state.errors.push(...newError)
    },
  
  },
  actions: {
    async addRandomNumber({commit}){
      let URL = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";
      Axios.get(URL).then(response=>{
        commit('addToCounter',response.data)
      }).catch(error=>{
        commit('addErrors',error)
        console.log(error)
      })
    }
  },
  modules: {
  }
})
