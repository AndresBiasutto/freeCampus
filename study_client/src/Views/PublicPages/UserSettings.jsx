import { useSelector } from "react-redux";
import Background from "../../components/molecules/CommonMolecules/Background";
import Detail from "../../components/templates/userSettingsTemplates/Detail";

const UserSettings = () => {
  const user = useSelector((store) => store.user);

  return (
    <Background>
      <Detail user={user} />
    </Background>
  );
};

export default UserSettings;
