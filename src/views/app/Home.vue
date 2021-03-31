<template>
  <div class="home">
    Testtttt
    <Row :gutter="30" justify="space-around" class="code-row-bg">
      <Card :dis-hover="true">
        <div class="welcome">
          <p>สวัสดี ระบบบริหารสิทธิ์และลงทะเบียนผู้ใช้งานระบบ</p>
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
<style lang="less">
.space {
  padding: 15px;
  height: 220px;
  // margin: 15px;
}
.welcome{
  color: gray;
  vertical-align: middle;
  text-align: center
}
.welcome p{
  margin: auto auto;
  display: block;
}

</style>
