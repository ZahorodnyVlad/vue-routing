<template>
    <div>

        <h1>
            car id {{ id }}
        </h1>

        <button class="btn btn-sm btn-default mb-2" @click="goBackToCars">Back</button>
      <br>
      <router-link
          class="btn btn-info mt-2"
          tag="button"
          :to="'/car/' + id + '/full'"
      >info</router-link>

      <hr>

      <router-view></router-view>

    </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$router.currentRoute.params['id']
      }
    },
    methods: {
      goBackToCars () {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route (toR, fromR) {
        this.id = toR.params['id']
      }
    }
  };
</script>

<style scoped>

</style>