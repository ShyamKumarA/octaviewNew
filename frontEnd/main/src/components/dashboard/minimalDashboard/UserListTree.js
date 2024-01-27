/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Input, Table } from 'reactstrap';
import { userTreeListManage } from '../../../store/userSlice';

// eslint-disable-next-line react/prop-types
const UserListTree = ({id}) => {
    console.log(`userId${id}`);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userTreeListManageReducer);
  
  const [selectedChild, setSelectedChild] = useState('child1');

  useEffect(() => {
    dispatch(userTreeListManage(id));
  }, [dispatch,id]);


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
              <th>Mobile</th>
              <th>Sponser</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
        {data && getChildData().map((tdata, index) => (
          <tr key={tdata._id} className="border-top">
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
                <Link
                                to={`/users-tree-list/${tdata._id}`}
                                className="hidden xs:block ml-2"
                              >
                <Button className="btn"  color="success" >
                View Tree
              </Button>
              </Link>
              </td>
              <td>
              <Link
                                to={`/user-details/${tdata._id}`}
                                className="hidden xs:block ml-2"
                              >
              <Button className="btn "  color="info" >
                View Details
              </Button>
              </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default UserListTree;
