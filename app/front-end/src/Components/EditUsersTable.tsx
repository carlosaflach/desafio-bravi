import {
  Tr,
  Td,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import axios from "axios";

interface Props {
  _id: string;
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  celNumber: string;
  address: string;
  setEdit: Function;
  getData: Function;
}

const EditUsersTable = (props: Props) => {
  const {
    name,
    age,
    email,
    phoneNumber,
    celNumber,
    address,
    _id,
    getData,
    setEdit,
  } = props;
  const [editName, setEditName] = useState(name);
  const [editAge, setEditAge] = useState(age);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);
  const [editCelNumber, setEditCelNumber] = useState(celNumber);
  const [editAddress, setEditAddress] = useState(address);
  
  const handleSave = async () => {
    await axios.put(`http://localhost:3001/users/${_id}`, {
      name: editName, age: editAge, email: editEmail, phoneNumber: editPhoneNumber,
      celNumber: editCelNumber, address: editAddress,
    });
    setEdit(null);
    getData();
  };

  return (
    <>
      <Tr>
        <Td>
          <Input
            type="text"
            placeholder="Nome"
            value={editName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditName(e.currentTarget.value);
            }}
          />
        </Td>
        <Td>
          <Input
            type="number"
            placeholder="Idade"
            value={editAge}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditAge(e.currentTarget.valueAsNumber);
            }}
          />
        </Td>
        <Td>
          <Input
            type="email"
            placeholder="Email"
            value={editEmail}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditEmail(e.currentTarget.value);
            }}
          />
        </Td>
        <Td>
          <Input
            type="tel"
            placeholder="Telefone"
            value={editPhoneNumber}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditPhoneNumber(e.currentTarget.value);
            }}
          />
        </Td>
        <Td>
          <Input
            type="tel"
            placeholder="Celular"
            value={editCelNumber}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditCelNumber(e.currentTarget.value);
            }}
          />
        </Td>
        <Td>
          <Input
            type="text"
            placeholder="Endereço"
            value={editAddress}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEditAddress(e.currentTarget.value);
            }}
          />
        </Td>
        <Td>
          <Button colorScheme="green" type="button" onClick={handleSave}>
            <CheckIcon />
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default EditUsersTable;
