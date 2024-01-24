import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Input, Table } from 'reactstrap';
import { userListManage } from '../../../store/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userListManageReducer);

  const [selectedChild, setSelectedChild] = useState('child1');

  useEffect(() => {
    dispatch(userListManage());
  }, [dispatch]);

  const getChildData = () => {
    if (!data) return []; // Add a null check for data
    switch (selectedChild) {
      case 'child1':
        return data.child1 || [];
      case 'child2':
        return data.child2 || [];
      case 'child3':
        return data.child3 || [];
      default:
        return [];
    }
  };

  
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CardTitle tag="h4">Users Overview</CardTitle>
          </div>
          <div className="mt-4 mt-md-0">
        <Input
          type="select"
          className="custom-select"
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)}
        >
          <option value="child1">Child 1</option>
          <option value="child2">Child 2</option>
          <option value="child3">Child 3</option>
        </Input>
      </div>

        </div>
      </CardBody>
      <CardBody className="bg-light d-flex align-items-center justify-content-between">
        <div>
          <h3>March 2022</h3>
          <h5 className="fw-light mb-0 text-muted">Report for this month</h5>
        </div>
        <div className="mt-4 mt-md-0">
          <h2 className="text-success mb-0">$3,690</h2>
        </div>
      </CardBody>
      <div className="table-responsive">
        <Table className="text-nowrap align-middle mb-0" hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Package</th>
              <th>Amount</th>
              <th>Sponser</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        {getChildData().map((tdata, index) => (
          <tr key={tdata.email} className="border-top">
                <td>
                  <h6 className="mb-0">{index+1}</h6>
                </td>
                <td>
                  <h6 className="mb-0">{tdata.username}</h6>
                </td>
                <td><h6 className="mb-0">{tdata.packageName}</h6></td>
                <td><h6 className="mb-0">{tdata.phone}</h6></td>
                <td><h6 className="mb-0">{tdata.ownSponserId}</h6></td>

                <td>
                <Button className="btn "  color="success">
                View Tree
              </Button>
              
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default UserList;
