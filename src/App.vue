<template>
  <div id="app">
      
    <MenuBar></MenuBar>
    <br/>    
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>

import MenuBar from './views/app/components/MenuBar.vue'
import Profile from './views/app/profile.vue'
export default {
  name: 'App',
  component: {
    MenuBar,
    Profile
  },
  data (){
			return{
				theme1: 'primary'
			}
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e52;
}

</style>
