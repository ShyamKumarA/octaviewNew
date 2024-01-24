import { Row, Col } from 'reactstrap';
import PendingUsers from '../../components/dashboard/minimalDashboard/PendingUsers';


const AcceptUsers = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <PendingUsers />
        </Col>
      </Row>
      
    </>
  );
};

export default AcceptUsers;
