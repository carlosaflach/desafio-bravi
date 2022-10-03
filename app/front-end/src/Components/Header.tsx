import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { getLocalToken, logout } from "../Services/handleLocalStorage";

export default function Header() {
  const navigate = useNavigate();


  const { email } = getLocalToken();
  console.log(email);


  const handleClick = () => {
    logout();
    navigate("/login");
  };


  return (
    <div className='header'>
        <p> Você está logado como: {email}</p>
        <Button colorScheme="green" onClick={handleClick}>
          Voltar
        </Button>
    </div>
  );
}
