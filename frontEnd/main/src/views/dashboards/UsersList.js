import { Row, Col } from 'reactstrap';
import UserList from '../../components/dashboard/minimalDashboard/UserList';


const UsersList = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <UserList />
        </Col>
      </Row>
      
    </>
  );
};

export default UsersList;