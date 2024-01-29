import React, {  useEffect,useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import Iframe from 'react-iframe';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { adminProfileManage } from '../../../store/profileSlice';



import img1 from '../../../assets/images/users/user1.jpg';

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState('2');


  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const dispatch=useDispatch();
  const { data } = useSelector((state) => state.adminProfileManageReducer);
 console.log("userdata",data);

  useEffect(() => {
    dispatch(adminProfileManage());
  }, [dispatch])
  




  return (
    <>
      
      <Row>
        <Col xs="12" md="12" lg="4">
          <Card>
            <CardBody className="p-4">
              <div className="text-center mt-4">
                <img src={img1} className="rounded-circle" width="150" alt="" />
                <CardTitle tag="h4" className="mt-2 mb-0">
                Admin
                </CardTitle>
                <CardSubtitle className="text-muted">{data && data.name}</CardSubtitle>
                <Row className="text-center justify-content-md-center mt-3">
                  <Col xs="4">
                    <a href="/" className="text-dark fw-bold text-decoration-none">
                      <i className="bi bi-person text-muted"></i>
                      <span className="font-medium ms-2">254</span>
                    </a>
                  </Col>
                  <Col xs="4">
                    <a href="/" className="text-dark fw-bold text-decoration-none">
                      <i className="bi bi-columns text-muted"></i>
                      <span className="font-medium ms-2">54</span>
                    </a>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <CardBody className="border-top p-4">
              <div>
                <CardSubtitle className="text-muted fs-5">Email address</CardSubtitle>
                <CardTitle tag="h4">{data && data.email}</CardTitle>

                <CardSubtitle className="text-muted fs-5 mt-3">Phone</CardSubtitle>
                <CardTitle tag="h4">{data && data.phone}</CardTitle>

                <CardSubtitle className="text-muted fs-5 mt-3">Address</CardSubtitle>
                <CardTitle tag="h4">{data && data.address}</CardTitle>
                <div>
                  <Iframe
                    className="position-relative"
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                    width="280"
                    height="150"
                    frameborder="0"
                    allowfullscreen
                  />
                </div>
                <CardSubtitle className="text-muted fs-5 mt-3 mb-2">Social Profile</CardSubtitle>
                <div className="d-flex align-items-center gap-2">
                  <Button className="btn-circle" color="info">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button className="btn-circle" color="success">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button className="btn-circle" color="danger">
                    <i className="bi bi-youtube"></i>
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12" lg="8">
          <Card>
            <Nav tabs>
              
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active bg-transparent' : 'cursor-pointer'}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active bg-transparent' : 'cursor-pointer'}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Setting
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <div className="p-4">
                      <Row>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Full Name</strong>
                          <br />
                          <p className="text-muted">Johnathan Deo</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Mobile</strong>
                          <br />
                          <p className="text-muted">(123) 456 7890</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Email</strong>
                          <br />
                          <p className="text-muted">johnathan@admin.com</p>
                        </Col>
                        <Col md="3" xs="6" className="border-end">
                          <strong>Location</strong>
                          <br />
                          <p className="text-muted">London</p>
                        </Col>
                      </Row>
                      <h4 className="font-medium mt-4">Skill Set</h4>
                      <hr />
                      <h5 className="mt-4">
                        Wordpress <span className="float-end">80%</span>
                      </h5>
                      
                      <h5 className="mt-4">
                        HTML 5 <span className="float-end">90%</span>
                      </h5>
                      <Progress color="success" value="25" />
                      <h5 className="mt-4">
                        jQuery <span className="float-end">50%</span>
                      </h5>
                      <Progress color="info" value={50} />
                      <h5 className="mt-4">
                        Photoshop <span className="float-end">70%</span>
                      </h5>
                      <Progress color="warning" value={75} />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <div className="p-4">
                      <Form>
                        <FormGroup>
                          <Label>Full Name</Label>
                          <Input type="text" placeholder="Shaina Agrawal" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input type="email" placeholder="Jognsmith@cool.com" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Phone No</Label>
                          <Input type="text" placeholder="123 456 1020" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Message</Label>
                          <Input type="textarea" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Select Country</Label>
                          <Input type="select">
                            <option>USA</option>
                            <option>India</option>
                            <option>America</option>
                          </Input>
                        </FormGroup>
                        <Button color="primary">Update Profile</Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdminProfile;
