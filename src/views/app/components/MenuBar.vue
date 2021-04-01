<template>
      <!-- navbar -->
      <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="routes  ">
        <MenuItem name="home">
            <Icon type="ios-paper" />
            Home
        </MenuItem>
        <MenuItem name="profile">
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
                <MenuItem name="3-5">AIMs</MenuItem>
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
    
    
</template>

<script>
export default {
  name: 'MenuBar',
  data (){
    return{
        theme1: 'primary'
    }
  },
 methods: {
   routes(_path){
     this.$router.push({ name: _path, params: { } })
   }
 }
}
</script>

<style>
/* .moveInUp-enter-active{
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
} */
</style>
