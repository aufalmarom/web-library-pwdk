import { Container, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect ,useState} from 'react';

const ActivateAccount = () => {
  const [message,setMessage] = useState();
  const {param}  = useParams();
  useEffect (()=>{
    ActivationAccount();// eslint-disable-next-line
  },[]);

  const ActivationAccount = async () => {
    await axios.put(`http://localhost:5000/v1/api/activationAccount/${param}`)
    .then(response=>{
      setMessage(response.data.message);
      localStorage.setItem("status","1")
    })
      .catch((error)=>{
        setMessage(error.response.data.message);
      })
  }
  return (
      <Container maxW='-moz-max-content' mt={4}>
        <Text align='center'fontSize='xl'>
          {message}
        </Text>
      </Container>
  )
}

export default ActivateAccount