<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{counterState.count}}</p>
            <button @click="clickIncrement" class="btn btn-success m-1">Increment</button>
            <button @click="clickDecrement" class="btn btn-warning m-1">Decrement</button>
            <button @click="clickIncrementBy(5)" class="btn btn-danger m-1">Increment By</button>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "VuexCounter",
  data () {
    return {
      count:0
    }
  },
  computed: mapGetters({
    counterState: "getCounterState"
  }),
  methods: {
    clickIncrement : function() {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    clickDecrement : function() {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    clickIncrementBy : function(value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {value: value});
    }
    
  }
}
</script>

<style>

</style>