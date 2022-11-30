import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react'

const FailedModal = (props: any) => {
  const onClose = ()=>{
    props.close();
  }
  return (
    <Modal isOpen={props.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            {props.message}
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
            Close
            </Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default FailedModal