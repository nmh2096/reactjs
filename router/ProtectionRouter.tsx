// import { ReactNode } from "react"
import { getLocal } from "@/utils/storage";
import { Navigate } from "react-router-dom";

interface IPRouter {
  component: any;
}

export default function ProtectionRouter(props: IPRouter) {
  const { component: Component } = props;
  const token = getLocal('token');

  return token ? (<Component />) : (<Navigate to="/login" />)

}
