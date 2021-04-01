// Component
// import LineSpace from './LineSpace'
// import LineSpaceHalf from './LineSpaceHalf'
import MenuBar from './MenuBar'
import Profile from '@/views/app/profile'

const Component = {
  install (Vue) {
    // Vue.component(LineSpace.name, LineSpace)
    // Vue.component(LineSpaceHalf.name, LineSpaceHalf)
    Vue.component(MenuBar.name, MenuBar)
    Vue.component(Profile.name, Profile)
  }
}
export default Component