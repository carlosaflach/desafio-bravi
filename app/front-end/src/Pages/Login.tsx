import React, { useEffect, useState } from 'react';
import {
  Button, Input, InputGroup, InputRightElement,
} from '@chakra-ui/react';

import createToken from '../Services/generateToken';
import { setLocalStorage } from '../Services/handleLocalStorage';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  useEffect(() => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(email);
    const passMinLength = 6;
    const passValid = password.length >= passMinLength;
    const isValid = mailValidator && passValid;
    setEnableButton(isValid);
    setIsAuth(false);
  }, [email, password]);


  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const token = createToken();
    setIsAuth(true);
    const AUTH = "@login-token"
    setLocalStorage(AUTH, {email, token});
    setIsLogged(true);
  };  

  if(isLogged && isAuth) return <Navigate to='/users' />

  return (
    <div className='login_page'>
      <form className='login_content'>
        <div>
          <label htmlFor="email">
            Email:
            <Input
              id="email"
              placeholder="Email"
              size="lg"
              value={email}
              onChange={(e: React.FormEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value); }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e: React.FormEvent<HTMLInputElement>) => { setPassword(e.currentTarget.value); }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </label>
        </div>
        <div className='login__btns'>
          <Button
            colorScheme="green"
            size="md"
            disabled={!enableButton}
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {handleLogin(e)}}
            // width="sm"
          >
            Login
          </Button>
          <Button
            colorScheme="green"
            size="md"
            // width="sm"
            onClick={() => navigate('/register') }
          >
            Register
          </Button>
        </div>

      </form>
    </div>
  );
}