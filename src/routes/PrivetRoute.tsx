import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
export default function PrivetRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  if (isLoading) {
    return <p>loading....</p>;
  }
  if (!user.email && !isLoading) {
    return <Navigate to='/signin' state={{ path: pathname }} />;
  }
  return children;
}
