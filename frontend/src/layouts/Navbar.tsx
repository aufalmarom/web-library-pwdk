import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("NIM");
    localStorage.removeItem("email");
    localStorage.removeItem("status");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("ID");
    window.location.reload()
  }
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' py={4} px={4} backgroundColor='blue.400'>
      <Box p='2'>
        <Link to='/'>
          <Heading size='md' color='white'>Web Library</Heading>
        </Link>
      </Box>
      <Spacer />
      { localStorage.getItem("role") === "Admin" && (
        <Link to='/dashboard'><Button colorScheme='blue'>Dashboard</Button></Link>
      )}
      { localStorage.getItem("accessToken") && (
        <>
          <Link to='/loan'><Button colorScheme='blue'>Loan History</Button></Link>
          <Link to='/cart'><Button colorScheme='blue'>My Chart</Button></Link>
        </>
      )}      
      <ButtonGroup gap='2'>
        { localStorage.getItem("accessToken") ? (
            <Button colorScheme='blue' onClick={Logout}>Log Out</Button>
        ) : (
          <>
            <Link to='/register'><Button colorScheme='blue'>Register</Button></Link>
            <Link to='/login'><Button colorScheme='blue'>Log in</Button></Link>
          </>
        )}
      </ButtonGroup>
    </Flex>
  )
}

export default Navbar