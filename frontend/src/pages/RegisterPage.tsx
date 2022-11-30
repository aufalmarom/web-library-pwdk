import {
  Box, Button, chakra, Flex, FormControl, Input, InputGroup, InputLeftElement, InputRightElement, Stack, FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CAiFillMail = chakra(AiFillMail);

type UserSubmitForm = {
  NIM: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const validationSchema = Yup.object().shape({
    NIM: Yup.string().required('NIM is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm)  => {
    await axios.post('http://localhost:5000/v1/api/register',{
      data
    }).then(response=>{
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("NIM", response.data.NIM);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("status", response.data.status);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("ID", response.data.id);
      window.location.reload();
    })
    .catch((error) => {
      setErrMessage(error.response.data.errors[0].message);      
    });
  };

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.50"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                {errMessage && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errMessage}
                      </FormHelperText>
                  )}  
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" {...register('NIM')} placeholder="NIM"/>
                  </InputGroup>
                  {errors.NIM && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errors.NIM.message}
                      </FormHelperText>
                  )}     
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" {...register('username')} placeholder="username"/>
                  </InputGroup>
                  {errors.username && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errors.username.message}
                      </FormHelperText>
                  )}     
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CAiFillMail color="gray.300" />}
                    />
                    <Input type="text" {...register('email')} placeholder="email"/>
                  </InputGroup>
                  {errors.email && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errors.email.message}
                      </FormHelperText>
                  )}     
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password" {...register('password')}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errors.password.message}
                      </FormHelperText>
                  )}
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password" {...register('confirmPassword')}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowConfirmPassword}>
                        {showConfirmPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.confirmPassword && (
                      <FormHelperText textAlign="left" color='red'>  
                          {errors.confirmPassword.message}
                      </FormHelperText>
                  )}
                </FormControl>
                <Button
                  borderRadius={8}
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default RegisterPage;
