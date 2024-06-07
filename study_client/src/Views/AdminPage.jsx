//import AsideBar from "../components/AsideBar";
import TopBar from "../components/TopBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const { route } = useSelector((store) => store);
  useEffect(() => {
    console.log(route);
  

  }, [route])
  return (
    <div>
      {/* <AsideBar /> */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <TopBar />
        <div className=" pt-6 2xl:container">
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
