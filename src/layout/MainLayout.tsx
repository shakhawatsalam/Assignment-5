import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";


export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className='pt-16'>
        <Outlet />
      </div>
    </div>
  );
}
