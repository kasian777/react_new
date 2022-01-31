
import {Link, Outlet, NavLink} from "react-router-dom";

import css from "./Layout.module.css";

const Layout = () => {
  return(
      <div>

          <div className={css.header}>
              <NavLink to ="/">Home</NavLink>
              <NavLink to ="/users">Users</NavLink>
              <NavLink to ="/posts">Posts</NavLink>
          </div>
          <div className={css.outlet}>
              <Outlet/>
          </div>

          <div className={css.duter}>
              @niceGOD
          </div>
      </div>
  )
}
export  default Layout;