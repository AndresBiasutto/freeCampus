import Container from "../../layouts/Container";
import ListCoursesBtn from "../../v2Components/atoms/ListCoursesBtn";
import LandingAboutUs from "../../v2Components/templates/LandingAboutUs";
import LandingCarousel from "../../v2Components/templates/LandingCarousel";
import LandingFeaturedCourses from "../../v2Components/templates/LandingFeaturedCourses";

// eslint-disable-next-line react/prop-types
const Landing = ({isNew}) => {
  return (
    <Container>
      {isNew  && <div className="h20 w-20">hola</div>}
      <LandingCarousel />
      <LandingFeaturedCourses />
      <ListCoursesBtn />
      <LandingAboutUs />
    </Container>
  );
};

export default Landing;
