import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'


export default function Social() {
    return (
      <div className="App">
        <TopBar/>
        <div className="flex-row">
          <SideBar/>
          <div>SOICAL</div>
          </div>
      </div>
      )
}