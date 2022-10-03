import axios from "axios";
import { useEffect, useState } from "react";
import CreateUserTable from "../Components/CreateUserTable";
import Header from "../Components/Header";
import ReadUsersTable from "../Components/ReadUsersTable";
import IUser from "../interface/IUser";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
} from "@chakra-ui/react";
import EditUsersTable from "../Components/EditUsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/users");
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {

  }, [edit]);

  return (
    <>
      <Header />
      <CreateUserTable getData={getData} />
      <TableContainer>
        <Table>
          <Tbody>
            {users &&
              users.map((user: IUser, index) => (
                <>
                  {edit === user._id ? (
                    <EditUsersTable
                      key={`${user._id}-${index}`}
                      _id={user._id}
                      name={user.name}
                      age={user.age}
                      email={user.email}
                      phoneNumber={user.phoneNumber}
                      celNumber={user.celNumber}
                      address={user.address}
                      setEdit={setEdit}
                      getData={getData}
                    />
                  ) : (
                    <ReadUsersTable
                      key={user._id}
                      _id={user._id}
                      name={user.name}
                      age={user.age}
                      email={user.email}
                      phoneNumber={user.phoneNumber}
                      celNumber={user.celNumber}
                      address={user.address}
                      setEdit={setEdit}
                      getData={getData}
                    />
                  )}
                </>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Users;
