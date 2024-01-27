import { Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import UserListTree from '../../components/dashboard/minimalDashboard/UserListTree';


const ViewUserTree = () => {
  const {userId} = useParams();
  console.log(`userId:${userId}`);
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <UserListTree id={userId} />
        </Col>
      </Row>
      
    </>
  );
};

export default ViewUserTree;
