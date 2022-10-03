import {
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
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

const ReadUsersTable = (props: Props) => {
  const { name, age, email, phoneNumber, celNumber, address, _id, getData, setEdit } = props;

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/users/${_id}`)
    getData();
  };

  return (
    <>
      <Tr>
        <Td>{name}</Td>
        <Td>{age}</Td>
        <Td>{email}</Td>
        <Td>{phoneNumber}</Td>
        <Td>{celNumber}</Td>
        <Td>{address}</Td>
        <Td className="table__btn">
          <Button colorScheme="green" onClick={() => setEdit(_id)}>
            <EditIcon />
          </Button>
        </Td>
        <Td className="table__btn">
          <Button colorScheme="red" type='button' onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default ReadUsersTable;
