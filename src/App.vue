<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!--<li class="nav-item">-->
            <!--<router-link class="nav-link" to="/">Home</router-link>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<router-link class="nav-link" to="/cars">Cars</router-link>-->
          <!--</li>-->
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
            <a class="nav-link">Cars3</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
            <a class="nav-link">Cars4</a>
          </router-link>

        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

  <script>

export default {
}
</script>

<style scoped>



</style>
