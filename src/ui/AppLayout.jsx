import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import GetStartButton from "./GetStartButton";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <main className="main">
        <Outlet />
      </main>

      <GetStartButton />
    </div>
  );
}

export default AppLayout;
