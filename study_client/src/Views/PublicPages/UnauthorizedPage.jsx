import Background from "../../components/molecules/CommonMolecules/Background"
import Container from "../../components/molecules/CommonMolecules/Container"


const UnauthorizedPage = () => {
  return (
    <Background >
      <Container>
        <h1 className=" text-light-text dark:text-dark-text bg-red-700 dark:bg-red-900 p-2 rounded-xl" >INGRESO NO AUTORIZADO</h1>
      </Container>
    </Background>
  )
}

export default UnauthorizedPage