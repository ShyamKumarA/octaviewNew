import { Row, Col } from 'reactstrap';
import PendingTopUp from '../../components/dashboard/minimalDashboard/PendingTopUp';


const AcceptTopups = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <PendingTopUp />
        </Col>
      </Row>
      
    </>
  );
};

export default AcceptTopups;