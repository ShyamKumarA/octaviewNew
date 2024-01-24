import { Row, Col } from 'reactstrap';
import PendingPackages from '../../components/dashboard/minimalDashboard/PendingPackages';


const AcceptPackages = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <PendingPackages />
        </Col>
      </Row>
      
    </>
  );
};

export default AcceptPackages;
