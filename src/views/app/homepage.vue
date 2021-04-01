<template>
  <div class="home">
    <Row :gutter="30" justify="space-around" class="code-row-bg">
      <Card :dis-hover="true">
        <div class="welcome">
          <p>สวัสดี ยินดีต้อนรับทุกๆท่าน</p>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      fullname: ''
    }
  },
  computed: {
    // ...mapState('coreStore', ['userProfile'])
  },
  mounted() {
    // this.fullname = this.userProfile.userInfo.titleNameThai + this.userProfile.userInfo.empNameThai + ' ' + this.userProfile.userInfo.empSurnameThai
  }
}
</script>
<style></style>

