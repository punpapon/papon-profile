<template>
  <div id="app">
      <!-- navbar -->
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            Home
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            Profile
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                Project
            </template>
            <MenuGroup title="Somapa">
                <MenuItem name="3-1">APPS</MenuItem>
            </MenuGroup>
            <MenuGroup title="Thai Life">
                <MenuItem name="3-4">Product Factory(PF)</MenuItem>
                <MenuItem name="3-5">Claim</MenuItem>
            </MenuGroup>
            <MenuGroup title="KTB">
                <MenuItem name="3-4">LES</MenuItem>
                <MenuItem name="3-5">AIM</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            Contact Us
        </MenuItem>

        <div style="text-align: right; padding-right: 10px">
          <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </RadioGroup>
        </div>
    </Menu>
    <br>
    
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
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
  color: #2c3e50;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
