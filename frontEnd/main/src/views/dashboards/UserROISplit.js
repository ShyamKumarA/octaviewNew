import { Row, Col } from 'reactstrap';
import ROISplit from '../../components/dashboard/minimalDashboard/ROISplit';


const UserROISplit = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <ROISplit />
        </Col>
      </Row>
      
    </>
  );
};

export default UserROISplit;