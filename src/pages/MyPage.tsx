import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import '../App.css'

export default function MyPage(){
    return (
        <div className="App">
          <TopBar/>
          <div className="flex-row">
            <SideBar/>
            </div>
        </div>
      )
}