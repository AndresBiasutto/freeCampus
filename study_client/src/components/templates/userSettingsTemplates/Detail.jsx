import PropTypes from "prop-types";
import { useEffect } from "react";
import Container from "../../molecules/CommonMolecules/Container";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../redux/actions/userActions";

import UserImg from "../../molecules/UserDetail/UserImg";
import UserHeader from "../../molecules/UserDetail/UserHeader";
import AdminButtons from "../../molecules/UserDetail/AdminButtons";
import UserSubjects from "../../molecules/UserDetail/UserSubjects";
import AboutMe from "../../molecules/UserDetail/AboutMe";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getOneUser(id));
  }, [dispatch, id]);

  return (
      <Container>
        <div className=" w-full sm:flex sm:items-center justify-between px-6 py-4">
          <UserImg image={user?.image} name={user?.name} />

          <UserHeader
            name={user?.name}
            email={user?.email}
            contactNumber={user?.contactNumber}
            role={user?.role}
          />
          <AdminButtons role={user.role} />
        </div>

        <div className=" w-full px-6 py-4">
          <UserSubjects
            role={user.role}
            enrolledSubjects={user.enrolledSubjects}
            createdSubjects={user.createdSubjects}
          />

          <AboutMe name={user.name} description={user.description} />
        </div>
      </Container>
  );
};
Detail.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    contactNumber: PropTypes.string,
    role: PropTypes.string,
    enrolledSubjects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
export default Detail;
