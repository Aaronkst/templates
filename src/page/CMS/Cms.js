import { useState, useEffect } from 'react';
import '../App.scss';
import { Chart } from 'react-charts';
import { Redirect, Switch, Route, Link, HashRouter } from 'react-router-dom';
import { Button, Form, Row, Col, Table, Navbar, Container, Nav, NavDropdown, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faFileExcel, faSearch } from '@fortawesome/free-solid-svg-icons'

function Time() {

  const tick = () => {
    let time = new Date().toLocaleTimeString('en-US');
    return time;
  }

  const [ time, setTime ] = useState(tick());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(tick()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <span>{time}</span>
  )
}

function Layout(props) {

  return (
    <>
      <div style={{display: "flex"}}>
        <div className="bg-dark col-1 text-justify nav-wrap pt-3">
          <Nav defaultActiveKey="/cms/" className="flex-column">
            <Nav.Link><Link to='/cms/' className="text-white text-decoration-none"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></Nav.Link>
            <Nav.Link><Link to='/cms/menu' className="text-white text-decoration-none"><FontAwesomeIcon icon={faUser} /> Customer</Link></Nav.Link>
            <Nav.Link><Link to='/cms/user' className="text-white text-decoration-none"><FontAwesomeIcon icon={faUser} /> User</Link></Nav.Link>
            <Nav.Link><Link to='/cms/report' className="text-white text-decoration-none"><FontAwesomeIcon icon={faFileExcel} /> Report</Link></Nav.Link>
          </Nav>
        </div>
        <div className="col">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <Nav></Nav>
              <Nav>
                <NavDropdown title="Logged in as: Admin">
                  <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link disabled className="text-white"><Time /></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="px-5 pt-3">
          <App />
          </div>
        </div>
      </div>
    </>
  )
}

function Dashboard() {
  const data = [
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    },
    {
      label: 'Series 2',
      data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    }
  ]
 
  const axes = [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ]

  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <Container fluid>
        <Row className="shadow rounded">
          <Col lg={6} className="p-3">
            <h4>Customers</h4>
            <div className="scrollable">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Terry</td>
                    <td>Lorum</td>
                    <td>@troy</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={6} className="p-3">
            <h4>Top Sellers</h4>
            <div className="scrollable">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>T-shirt</td>
                    <td>t001</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Shorts</td>
                    <td>s001</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jacket</td>
                    <td>j001</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Skincare</td>
                    <td>sk001</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="shadow p-4 rounded">
          <Col>
            <h4>Some Data</h4>
            <div style={{ width: '100%', height: '30vh' }}>
            <Chart data={data} axes={axes} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

function Menu() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <h1>Customers Management</h1>
      <Row className="mb-3">
        <Col lg={12} className="bg-light rounded p-3">
          <Form>
            <Row>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control name="name" type="name" placeholder="Customer Name" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Customer Phone</Form.Label>
                  <Form.Control name="phone" type="number" placeholder="Customer Phone" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Customer Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Customer Email" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Customer Type</Form.Label>
                  <Form.Select name="type">
                    <option disabled>Customer Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="primary" className="rounded-pill" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="shadow p-3">
          <h4>List</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Terry</td>
                <td>Lorum</td>
                <td>@troy</td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            {items}
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </>
  )
}

function User() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <h1>User Management</h1>
      <Row className="mb-3">
        <Col lg={12} className="bg-light rounded p-3">
          <Form>
            <Row>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control name="name" type="name" placeholder="User Name" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>User Phone</Form.Label>
                  <Form.Control name="phone" type="number" placeholder="User Phone" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>User Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="User Email" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>User Role</Form.Label>
                  <Form.Select name="type">
                    <option disabled>User Role</option>
                    <option value="1">Admin</option>
                    <option value="2">Operation Staff</option>
                    <option value="3">Accounting Staff</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="primary" className="rounded-pill" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="shadow p-3">
          <h4>List</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Admin</td>
                <td><a href="/cms/user#">Delete</a> | <a href="/cms/user#">Change Role</a> | <a href="/cms/user#">Edit</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Operation Staff</td>
                <td><a href="/cms/user#">Delete</a> | <a href="/cms/user#">Change Role</a> | <a href="/cms/user#">Edit</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Terry</td>
                <td>Lorum</td>
                <td>Accounting Staff</td>
                <td><a href="/cms/user#">Delete</a> | <a href="/cms/user#">Change Role</a> | <a href="/cms/user#">Edit</a></td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            {items}
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </>
  )
}

function Report() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <h1>Reports</h1>
      <Row className="mb-3">
        <Col lg={12} className="bg-light rounded p-3">
          <Form>
            <Row>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Txn Code</Form.Label>
                  <Form.Control name="code" type="name" placeholder="Txn Code" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Customer Phone</Form.Label>
                  <Form.Control name="phone" type="number" placeholder="Customer Phone" />
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="type">
                    <option disabled>Status</option>
                    <option value="1">Success</option>
                    <option value="2">Pending</option>
                    <option value="3">Failed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3} className="p-2">
                <Form.Group className="mb-3">
                  <Form.Label>Product Type</Form.Label>
                  <Form.Select name="type">
                    <option disabled>Type</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button variant="success" className="rounded-pill text-white mx-3" type="submit"><FontAwesomeIcon icon={faFileExcel} /> Export</Button>
                <Button variant="primary" className="rounded-pill" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="shadow p-3">
          <h4>Transaction Report</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Txn Code</th>
                <th>Customer Phone</th>
                <th>Status</th>
                <th>Product Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>001</td>
                <td>09123456789</td>
                <td className="bg-success text-white">Success</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>002</td>
                <td>09123456789</td>
                <td className="bg-success text-white">Success</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>003</td>
                <td>09123456789</td>
                <td className="bg-warning text-white">Pending</td>
                <td>2</td>
              </tr>
              <tr>
                <td>4</td>
                <td>004</td>
                <td>09123456789</td>
                <td className="bg-danger text-white">Fail</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            {items}
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </>
  )
}

function App() {
  return (
    <>
      <Switch>
        <Route
        path="/cms/menu"
        name="menu"
        render={props => (
            <Menu {...props} />
        )} />
        <Route
        path="/cms/user"
        name="user"
        render={props => (
            <User {...props} />
        )} />
        <Route
        path="/cms/report"
        name="report"
        render={props => (
            <Report {...props} />
        )} />
        <Route
        path="/cms/dashboard"
        name="dashboard"
        exact={true}
        render={props => (
            <Dashboard {...props} />
        )} />
        <Redirect from="/" to="/cms/dashboard" />
      </Switch>
    </>
  );
}

export default Layout;