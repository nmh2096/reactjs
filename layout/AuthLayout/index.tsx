import { Outlet } from "react-router-dom";
import { AuthLayoutContainer } from "./style";
import background from "../../assets/img/background1.jpeg"

export default function AuthLayout() {
  return (
    <AuthLayoutContainer >
      <img src={background} alt="" className="background" />
      <div className="content">
        <Outlet />
      </div>
    </AuthLayoutContainer>
  )
}
