<template>
    <h2>Store testing</h2>
    <p>Counter: {{count }}</p>
    <p>using a getter: {{ store.getters.tenMultiply }}</p>
    <button @click="callIncrement" >Increment</button>
    <button @click="callDecrement" >Decrement</button>
    <button @click="callAction">megaIncrement</button>
</template>
<script setup>
    import store from '../store'
    import {computed} from 'vue'
    let count = computed(()=> { return store.state.count})
    function callIncrement() {
        store.commit('increment', 5)
    }
    function callDecrement() {
        store.commit('decrement')
    }
    function callAction(){
        store.dispatch('megaIncrement',"incremented")
    }
</script>

<style>
</style>