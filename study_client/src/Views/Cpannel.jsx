import Background from "../components/molecules/CommonMolecules/Background";
import UsersTable from "../components/templates/adminTemplates/UsersTable";
import { getAllUsers } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cpannel = () => {
    const dispatch= useDispatch();
    const {users}= useSelector(state=> state.users)
    const {token}= useSelector(state=> state.auth)

    useEffect(() => {dispatch(getAllUsers(token))}, [dispatch, token])
    
  return (
    <Background>
      <UsersTable users={users} />
    </Background>
  );
};

export default Cpannel;
