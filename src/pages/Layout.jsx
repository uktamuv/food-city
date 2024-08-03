import { Outlet } from "react-router-dom"
import HeaderAll from "../component/headerAl"

function Layout() {
  return (
    <div>
   <HeaderAll/>
<Outlet/>
    </div>
  )
}

export default Layout