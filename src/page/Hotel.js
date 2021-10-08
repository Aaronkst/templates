import { useState } from 'react';
import './App.scss';
import './Hotel.css';
import { Modal, Row, Form, InputGroup, FormControl, Button, Card, Navbar, Container, Nav, Carousel } from 'react-bootstrap';
import { BrowserView, isMobile } from 'react-device-detect';
import placeholder from '../img/placeholder.jpg';
import placeholderPortrait from '../img/placeholderPortrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {

  const contentWidth = isMobile ? 'col-12' : 'col-8';

  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const loginClose = () => setLoginModal(false);
  const loginShow = () => setLoginModal(true);

  const searchClose = () => setSearchModal(false);
  const searchShow = () => setSearchModal(true);

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#">Page Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Menu 1</Nav.Link>
            <Nav.Link href="#">Menu 2</Nav.Link>
          </Nav>
          <BrowserView>
            <Nav>
              <Button variant='secondary' onClick={loginShow} className='mx-2'><FontAwesomeIcon icon={faUser} /> Login</Button>
              <Button variant='warning' onClick={searchShow} className='text-white mx-2'><FontAwesomeIcon icon={faSearch} /> Search</Button>
            </Nav>
          </BrowserView>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='carousel-wrapper shadow'>
      <header className='text-center mx-auto col-sm-6'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={placeholder}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={placeholder}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={placeholder}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
    </div>

    <div className='bg-white col-sm-6 offset-sm-3 shadow'>
      <div className='row'>
        
        <div className={contentWidth+' py-4 mx-4'}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column>
              <span className='h4'>Properties</span>
            </Form.Label>
            <div className="col-sm-4">
              <InputGroup>
                <InputGroup.Text id="basic-addon2">Sort by</InputGroup.Text>
                <Form.Select>
                  <option>Hottest</option>
                  <option>Newest</option>
                  <option>Lowest</option>
                </Form.Select>
              </InputGroup>
            </div>
          </Form.Group>
          <br/>
          <Card className="mx-auto shadow">
            <div className="row no-gutters">
              <div className="col-sm-5 my-auto">
                <Card.Img src={placeholderPortrait} alt="placeholder" />
              </div>
              <div className="col-sm-7">
                <Card.Body>
                  <Card.Title>Property Name</Card.Title>
                  <Card.Text>
                    <p className="h6">Address</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><span className='h6'>Price</span> - $1000</p>
                  </Card.Text>
                  <div className='text-end'>
                    <Button variant="warning" className="text-white" target="_blank" href="#">Details &#8594;</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <br/>
          <Card className="mx-auto shadow">
            <div className="row no-gutters">
              <div className="col-sm-5 my-auto">
                <Card.Img src={placeholderPortrait} alt="placeholder" />
              </div>
              <div className="col-sm-7">
                <Card.Body>
                  <Card.Title>Property Name</Card.Title>
                  <Card.Text>
                    <p className="h6">Address</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><span className='h6'>Price</span> - $1000</p>
                  </Card.Text>
                  <div className='text-end'>
                    <Button variant="warning" className="text-white" target="_blank" href="#">Details &#8594;</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <br/>
          <Card className="mx-auto shadow">
            <div className="row no-gutters">
              <div className="col-sm-5 my-auto">
                <Card.Img src={placeholderPortrait} alt="placeholder" />
              </div>
              <div className="col-sm-7">
                <Card.Body>
                  <Card.Title>Property Name</Card.Title>
                  <Card.Text>
                    <p className="h6">Address</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><span className='h6'>Price</span> - $1000</p>
                  </Card.Text>
                  <div className='text-end'>
                    <Button variant="warning" className="text-white" target="_blank" href="#">Details &#8594;</Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <Row className='text-center'>
            <div className='col mt-4'>
              <Button variant='warning' className='text-white mx-2'>&#8592;</Button>
              <Button variant='secondary' className='mx-2'>1</Button>
              <Button variant='secondary' className='mx-2'>2</Button>
              <Button variant='secondary' className='mx-2'>3</Button>
              <Button variant='warning' className='text-white mx-2'>&#8594;</Button>
            </div>
          </Row>
        </div>
        
        <BrowserView className='col py-4'>
          <h4>Filter</h4>
          <Form>
            <div className='col w-100' style={{paddingRight: '1rem'}}>
              <h6>Price Range</h6>
              <InputGroup className="mb-2">
                <InputGroup.Text style={{width: '30%'}}>From</InputGroup.Text>
                <FormControl name='minPrice' type="number" placeholder="" value="0" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text style={{width: '30%'}}>To</InputGroup.Text>
                <FormControl name='maxPrice' type="number" placeholder="" value="1000" />
              </InputGroup>
              <h6>Address</h6>
              <Form.Select name='address' className='mb-2'>
                <option>Township, City</option>
                <option>Township 2, City 2</option>
              </Form.Select>
              <h6>Rooms</h6>
              <InputGroup className="mb-2">
                <InputGroup.Text style={{width: '30%'}}>Rooms</InputGroup.Text>
                <FormControl name='maxPrice' type="number" placeholder="" value="4" />
              </InputGroup>
              <Row className='text-end'>
                <div className='col mt-2'>
                  <Button variant='warning' className='text-white'>Apply</Button>
                </div>
              </Row>
            </div>
          </Form>
        </BrowserView>

      </div>
    </div>

    <div className='bg-dark w-100 absolute-bottom'>
      <div className='col-sm-6 offset-sm-3 text-center py-3'>
        <p className='text-white'>Contact Us</p>
        <p className="text-warning"><FontAwesomeIcon icon={faEnvelope} /> John.Smith@example.com | <FontAwesomeIcon icon={faMapMarker} /> Office Address</p>
      </div>
    </div>

    <Modal show={loginModal} onHide={loginClose}>
      <Modal.Header className='bg-dark text-white'>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='h6'>Email / Username</Form.Label>
          <Form.Control type="text" placeholder="Enter email / username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='h6'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className='text-center'><small>Not a user yet? <a href='#'>Register Here</a></small></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="text-white" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>

    <Modal show={searchModal} onHide={searchClose}>
      <Modal.Header className='bg-dark text-white'>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='h6'>Property Name</Form.Label>
          <Form.Control type="text" placeholder="Property Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='h6'>Address</Form.Label>
          <Form.Select name='address' className='mb-2'>
            <option>Township, City</option>
            <option>Township 2, City 2</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='h6'>Rooms</Form.Label>
          <FormControl name='maxPrice' type="number" placeholder="4" />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="text-white" type="submit">
            Search
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>

    </>
  );
}

export default App;