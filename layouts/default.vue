// here is all of the nuxt routing for six pages//

<template>
  <div>
    <div class="header">
      <div id="bizname">
        <p class="h1 font-weight-bold text-uppercase pt-4">{{ bizname }}</p>
        <p class="h3">{{ tagline }}</p>
      </div>
    </div>
    <div id="nav">
      <nuxt-link to="/home">Home</nuxt-link> 
      <nuxt-link to="/gallery">Gallery</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/weather">Weather</nuxt-link>
    </div>
    <nuxt />
  </div>
  
</template>

<script>

export default {
  name: 'app',
  
  data () {
    
    return {
      bizname: 'Cheadle     Design',
      tagline: 'Landscape - Gardening',
      message: 'here is that slot'
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#nav {
  padding: 20px;
  background-color: rgb(255, 233, 196);
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  background-image: radial-gradient(circle, #7ebb05 0%, #42b983 100%);
  background-color: #42b983;
  height: 150px;
  text-align: center;
}
</style>
