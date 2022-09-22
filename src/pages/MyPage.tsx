import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import MyTodos from '../components/MyTodos'
import '../App.css'

export default function MyPage(){
    return (
        <div className="App">
          <TopBar/>
          <div className="flex-row">
            <SideBar/>
            <MyTodos/>
          </div>
        </div>
      )
}