import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../redux/actions/userActions";
import UserDetailCard from "../../components/UserComponents/UserDetailCard";

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    } else {
      console.error("User ID is undefined");
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2 flex flex-row items-center justify-between">

        <UserDetailCard user={user} />
      </div>
    </div>
  );
};

export default UserDetail;
