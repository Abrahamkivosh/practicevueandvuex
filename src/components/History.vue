<template>
<div class="container" >
    <h4>History</h4>
    <div class="history" >
        
        <span v-for="(number, index) in history" :key="index"
        :class="getIndexOfValue(value).includes(index) && 'bold' " >
            {{ number }}
        </span>

    </div>
    <div>
        <label for="number">Serach Value</label>
        <input type="number" v-model="value" name="number" id="number">
    </div>
 

</div>
  
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
            value:''
        }
    },
    computed: {
        ...mapState(['history']),
        ...mapGetters(['getIndexOfValue']),
      
    },

}
</script>

<style scoped>
 .container{
    margin-top: 4rem;
}

h4{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: blue;
}
.history{
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    width: 25rem;
    height: auto;
    margin: 0 auto;
    font-size: 16px;

}
.history > span{
    padding: 1rem;
    font-weight: 500;
}
input{
    text-align: center;
    margin: 5px;
    border-radius: 6px;
    border: 1px solid blue;
    padding: 15px auto;
    width: auto;
    height: 2rem;
    font-size: 16px;
}
.bold{
    font-weight: 900;
    color: blue;
    font-size: 18px;
}

</style>