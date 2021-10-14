import { useState } from 'react';
import './App.scss';
import './Ecommerce.css';
import { Modal, Form, Badge, FormControl, InputGroup, Button, Card, Navbar, NavDropdown, Container, Nav, Carousel } from 'react-bootstrap';
import { BrowserView } from 'react-device-detect';
import placeholder from '../img/placeholder.jpg';
import placeholderPortrait from '../img/placeholderPortrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faSearch, faUser, faAngleDown, faShoppingCart, faFire, faTag, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function DetailModal(props) {
  console.log(props)
  let badge = "";
  if(props){
    if(props.details.badge){
      badge = <Badge className={"text-white bg-"+props.details.badge.color}><FontAwesomeIcon icon={props.details.badge.icon} /></Badge>;
    }
  }

  return(
  <Modal size="lg" show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Property Name {badge}</Modal.Title>
    </Modal.Header>
    <Form>
      <Modal.Body>
        <div className='mx-auto w-75'>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={placeholder}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>View 1</h3>
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
                <h3>View 2</h3>
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
                <h3>View 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <hr/>
          <h6>Address</h6>
          <p><span className='h6'>1000 MMK</span></p>
          <p className="h6">Available Colors</p>
          <ul>
            <li>Red</li>
            <li>Yellow</li>
            <li>Cyan</li>
          </ul>
          <hr />
          <p className='h6'>Reviews</p>
          <p><FontAwesomeIcon icon={faUser} /> <strong>User 1</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <br/>
          <p><FontAwesomeIcon icon={faUser} /> <strong>User 2</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" className="mx-3 rounded-pill">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
      </Modal.Footer>
    </Form>
  </Modal>
  )
}

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false); 
  const [details, setDetails] = useState(false);

  const loginClose = () => setLoginModal(false);
  const loginShow = () => setLoginModal(true);

  const searchClose = () => setSearchModal(false);
  const searchShow = () => setSearchModal(true);

  const detailOpen = (details) =>  {
    setDetails(details);
    setDetailModal(true);
  }
  const detailClose = () =>  setDetailModal(false);

  return (
    <>
    <section className='ecommerce-header'>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/ecommerce/#">Page Title</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/ecommerce/#bestsellersanddeals">Top Sellers & Deals</Nav.Link>
              <NavDropdown title="Categories">
                <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <BrowserView>
              <Nav>
                <Nav.Link onClick={loginShow} className='mx-2 text-white text-decoration-none'><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
                <Button variant='warning' onClick={searchShow} className='text-white mx-2 rounded-pill'><FontAwesomeIcon icon={faSearch} /> Search</Button>
              </Nav>
            </BrowserView>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid my-auto">
        <div className="row">
          <div className="p-5 col-sm-8">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={placeholder}
                  alt="First slide"
                />
                <Carousel.Caption className="bg-dark rounded-pill opacity-50">
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
                <Carousel.Caption className="bg-dark rounded-pill opacity-50">
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

                <Carousel.Caption className="bg-dark rounded-pill opacity-50">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="p-5 col-sm-4 my-auto">
            <p className="display-3 text-white">Newest Arrivals</p>
            <Button size="lg" variant="outline-light" className="rounded-pill">View Now &rarr;</Button>
          </div>
        </div>
      </div>
      <p className="text-center w-100">
        <a className="rounded-pill text-white text-decoration-none display-5" href="/ecommerce/#bestsellersanddeals"><FontAwesomeIcon icon={faAngleDown} /></a>
      </p>
    </section>
    
    <section className="container-fluid" id="bestsellersanddeals">
      <div className="row">
        <div className="bg-warning bg-gradient py-5 col-sm-6 content">
          <p className="display-3 text-center text-white">Top Sellers <FontAwesomeIcon icon={faFire} className="text-danger" /></p>
          <div className="row">
            <Card className="mx-auto my-4 shadow px-0" style={{ width: '23rem' }}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Property Name <Badge className="bg-danger text-white rounded-pill"><FontAwesomeIcon icon={faFire} /> Popular</Badge></Card.Title>
                <Card.Text>
                  <p><span className='h6'>1000 MMK</span></p>
                  <p className="h6">Available Colors</p>
                  <ul>
                    <li>Red</li>
                    <li>Yellow</li>
                    <li>Cyan</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="dark" className="mx-3 rounded-pill">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="warning" onClick={() => { detailOpen({ badge: { icon: faFire, color: 'danger'}}); }} className="text-white rounded-pill" target="_blank" href="#">Details <FontAwesomeIcon icon={faInfoCircle} /></Button>
              </Card.Footer>
            </Card>
            <Card className="mx-auto my-4 shadow px-0" style={{ width: '23rem' }}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Property Name <Badge className="bg-danger text-white rounded-pill"><FontAwesomeIcon icon={faFire} /> Popular</Badge></Card.Title>
                <Card.Text>
                  <p><span className='h6'>1000 MMK</span></p>
                  <p className="h6">Available Colors</p>
                  <ul>
                    <li>Red</li>
                    <li>Yellow</li>
                    <li>Cyan</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="dark" className="mx-3 rounded-pill">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="warning" onClick={() => { detailOpen({ badge: { icon: faFire, color: 'danger'}}); }} className="text-white rounded-pill" target="_blank" href="#">Details <FontAwesomeIcon icon={faInfoCircle} /></Button>
              </Card.Footer>
            </Card>
          </div>
          <p className="text-center"><Button variant="dark" className="rounded-pill shadow" size="lg">View More  &rarr;</Button></p>
        </div>
        <div className="bg-success bg-gradient py-5 col-sm-6 content">
          <p className="display-3 text-center text-white">Best Deals <FontAwesomeIcon icon={faTag} className="text-warning" /></p>
          <div className="row">
            <Card className="mx-auto my-4 shadow px-0" style={{ width: '23rem' }}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Property Name <Badge className="bg-success text-white rounded-pill"><FontAwesomeIcon icon={faTag} /> 30% OFF</Badge></Card.Title>
                <Card.Text>
                  <p><span className='h4 text-primary'><small className="text-decoration-line-through">1000</small> 799 MMK</span></p>
                  <p className="h6">Available Colors</p>
                  <ul>
                    <li>Red</li>
                    <li>Yellow</li>
                    <li>Cyan</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="dark" className="mx-3 rounded-pill">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="warning" onClick={() => { detailOpen({ badge: { icon: faTag, color: 'success'}}); }} className="text-white rounded-pill" target="_blank" href="#">Details <FontAwesomeIcon icon={faInfoCircle} /></Button>
              </Card.Footer>
            </Card>
            <Card className="mx-auto my-4 shadow px-0" style={{ width: '23rem' }}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeholderPortrait}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Property Name <Badge className="bg-success text-white rounded-pill"><FontAwesomeIcon icon={faTag} /> 30% OFF</Badge></Card.Title>
                <Card.Text>
                  <p><span className='h4 text-primary'><small className="text-decoration-line-through">1000</small> 799 MMK</span></p>
                  <p className="h6">Available Colors</p>
                  <ul>
                    <li>Red</li>
                    <li>Yellow</li>
                    <li>Cyan</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="dark" className="mx-3 rounded-pill">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="warning" onClick={() => { detailOpen({ badge: { icon: faTag, color: 'success'}}); }} className="text-white rounded-pill" target="_blank" href="#">Details <FontAwesomeIcon icon={faInfoCircle} /></Button>
              </Card.Footer>
            </Card>
          </div>
          <p className="text-center"><Button variant="dark" className="rounded-pill shadow" size="lg">View More  &rarr;</Button></p>
        </div>
      </div>
    </section>

    <div className='bg-dark w-100'>
      <div className='col-sm-6 offset-sm-3 text-center py-3'>
        <p className='text-white'>Contact Us</p>
        <p className="text-warning"><FontAwesomeIcon icon={faEnvelope} /> John.Smith@example.com | <FontAwesomeIcon icon={faMapMarker} /> Office Address</p>
        <br />
        <p><small className="text-light">© Powered by <span className="brand">addTech</span></small></p>
      </div>
    </div>

    <Modal show={loginModal} onHide={loginClose}>
      <Modal.Header className='bg-secondary text-white' closeButton>
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
        <Button variant="primary" className="text-white rounded-pill w-100" type="submit">
          Login
        </Button>
        <p className='text-center mt-4'><small>Not a user yet? <a className="text-decoration-none" href='/hotel/#'>Register Here &rarr;</a></small></p>
        </Modal.Body>
      </Form>
    </Modal>

    <Modal show={searchModal} onHide={searchClose}>
      <Modal.Header className='bg-secondary text-white' closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='h6'>Property Name</Form.Label>
          <Form.Control type="text" placeholder="Property Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='h6'>Categories</Form.Label>
          <Form.Select name='address' className='mb-2'>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='h6'>Some Options</Form.Label>
          <Form.Check type={'checkbox'} label={'option 1'} />
          <Form.Check type={'checkbox'} label={'option 2'} />
          <Form.Check type={'checkbox'} label={'option 3'} />
        </Form.Group>
        <h6>Price Range</h6>
        <InputGroup className="mb-2">
          <InputGroup.Text style={{width: '30%'}}>From</InputGroup.Text>
          <FormControl name='minPrice' type="number" placeholder="" value="0" />
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Text style={{width: '30%'}}>To</InputGroup.Text>
          <FormControl name='maxPrice' type="number" placeholder="" value="1000" />
        </InputGroup>
        <Button variant="primary" className="text-white rounded-pill w-100" type="submit">
          Search &rarr;
        </Button>
        </Modal.Body>
      </Form>
    </Modal>

    <DetailModal show={detailModal} onHide={detailClose} details={details} />

    </>
  );
}

export default App;