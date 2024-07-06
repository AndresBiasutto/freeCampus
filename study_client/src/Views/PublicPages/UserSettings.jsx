import { useEffect } from "react";
import UserSettingsDetail from "../../components/UserComponents/UserSettingsDetail"
import UserForm from "../../components/UserComponents/UserForm";
import { useSelector } from "react-redux";

const UserSettings = () => {
  const user = useSelector((store) => store.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2 flex flex-row items-start justify-between">
        <UserForm />
        <UserSettingsDetail user={user} />
      </div>
    </div>
  );
};

export default UserSettings;
