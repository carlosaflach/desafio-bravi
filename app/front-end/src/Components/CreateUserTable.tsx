import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button, Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  getData: Function
}

const CreateUserTable = (props:Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [cel, setCel] = useState('');
  const [address, setAddress] = useState("");
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    verifyFields();
  }, [name, age, email, phone, cel, address]);

  const verifyFields = () => {
    const checkName = name.length >= 4;
    const checkAge = age > 0 && age < 100;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmail = regexEmail.test(email);
    const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    const checkPhone = phoneRegex.test(phone);
    const checkCel = phoneRegex.test(cel);
    const checkAddress = address.length >= 5;

    const isInfoValid = checkName && checkAge && checkEmail && checkPhone && checkCel && checkAddress;

    setEnableButton(isInfoValid);
  };


  const handleClick = async () => {
    try {
      const data = await axios.post('http://localhost:3001/users', {
        name, age, email, phoneNumber: phone, celNumber: cel, address
      });
      props.getData();
    } catch (error: any) {
      console.log(error)
    }
   
  };

  return (
    <TableContainer className="table_variant">
      <Table variant="simple" colorScheme="black">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Idade</Th>
            <Th>Email</Th>
            <Th>Telefone</Th>
            <Th>Celular</Th>
            <Th>Endereço</Th>
            <Th>Criar novo usuário</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setName(e.currentTarget.value);
                }}
              />
            </Td>
            <Td>
              <Input
                type="number"
                placeholder="Idade"
                value={age}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setAge(e.currentTarget.valueAsNumber);
                }}
              />
            </Td>
            <Td>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </Td>
            <Td>
              <Input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setPhone(e.currentTarget.value);
                }}
              />
            </Td>
            <Td>
              <Input
                type="tel"
                placeholder="Celular"
                value={cel}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setCel(e.currentTarget.value);
                }}
              />
            </Td>
            <Td>
              <Input
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setAddress(e.currentTarget.value);
                }}
              />
            </Td>
            <Td>
              <Button className="save__btn" colorScheme="green" size="md" disabled={!enableButton} onClick={handleClick}>
                Salvar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CreateUserTable;
