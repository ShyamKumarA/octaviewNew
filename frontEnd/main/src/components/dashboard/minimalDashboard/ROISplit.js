import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { splitRoi } from '../../../store/roiSlice';
import ComponentCard from '../../ComponentCard';


const BasicForm = () => {

  const dispatch = useDispatch();
  




  const [percentage, setPercentage] = useState('');
  const [modal, setModal] = useState(false);
  const [validationModal, setValidationModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleValidationModal = () => setValidationModal(!validationModal);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on the entered percentage value
    const isValidPercentage = parseFloat(percentage) >= 0.4 && parseFloat(percentage) <= 1.4;
    if (isValidPercentage) {
      // Show confirmation modal
      toggleModal();
dispatch(splitRoi(isValidPercentage))

    } else {
      // Show validation error modal
      toggleValidationModal();
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', width:"100%"}}>
      <ComponentCard title={<span style={{ color: 'red', fontWeight: 'bold' }}>Split Todays ROI</span>}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="percentageInput">Enter your percentage between 0.4 to 1.4</Label>
            <Input
              type="number"
              step="0.01"
              name="percentage"
              id="percentageInput"
              placeholder="Enter percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              required
              style={{ width: '200px' }} // Reduced length of the text box
            />
          </FormGroup>
          <Button color="primary" type="submit" size="lg">
            Submit
          </Button>
        </Form>
      </ComponentCard>

      {/* Confirmation Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirmation</ModalHeader>
        <ModalBody>
          Your percentage is: {percentage}
          {/* You can customize the confirmation message here */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

      {/* Validation Error Modal */}
      <Modal isOpen={validationModal} toggle={toggleValidationModal}>
        <ModalHeader toggle={toggleValidationModal}>Validation Error</ModalHeader>
        <ModalBody>
          Please enter a valid percentage between 0.4 and 1.4.
          {/* You can customize the validation error message here */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleValidationModal}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BasicForm;
