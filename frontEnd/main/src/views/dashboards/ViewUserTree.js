import { Row, Col } from 'reactstrap';
import UserListTree from '../../components/dashboard/minimalDashboard/UserListTree';


const ViewUserTree = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <UserListTree />
        </Col>
      </Row>
      
    </>
  );
};

export default ViewUserTree;
