<template>
  <div class="text-xs-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="procent"
      color="teal"
    >
      {{ procentText }}
    </v-progress-circular>
  </div>
</template>

<script>

import store from '../store'

  export default {
    data () {
      return {
        state: store.state,
        interval: {},
        value: 0
      }
    },
    computed: {
      procent() {
        return this.state.dayProcent * 100
      },
      procentText() {
        return (this.state.dayProcent * 100).toFixed(2) + '%'
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
  }
</script>

<style scoped lang="scss">
</style>
