/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from "react";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./lib/fitebase";
import MainLayout from "./layout/MainLayout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      {/* <Toaster /> */}
      <MainLayout />
    </div>
  );
}

export default App;
