import './App.scss';
import { Button, Card } from 'react-bootstrap';

function App() {
  return (
    <section className='bg-info'>
      <div className='my-auto'>
        <p className="display-3 main-header text-center text-white">Sample Templates (Mobile Friendly)</p>
        <br/>
        <div className="container">
        <div className="row">
          <Card className="mx-auto shadow" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Estate Agency</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Hotel Agency, Housing Agency, etc.</Card.Subtitle>
              <Card.Text>
                Website made for searching hotels/homes. Includes -
                <ul>
                  <li>Authentication (Login / Signup)</li>
                  <li>Search Engine</li>
                  <li>Realtime comments (Optional)</li>
                </ul>
              </Card.Text>
              <div className='text-end'>
                <Button variant="warning" className="text-white" target="_blank" href="/hotel">Preview &#8594;</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>E-commerce</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">E-commerce</Card.Subtitle>
              <Card.Text>
                Website made for general E-commerce. Includes -
                <ul>
                  <li>Authentication (Login / Signup)</li>
                  <li>Search Engine</li>
                  <li>Realtime comments (Optional)</li>
                </ul>
              </Card.Text>
              <div className='text-end'>
                <Button variant="warning" className="text-white" target="_blank" href="/ecommerce">Preview &#8594;</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-auto shadow" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>CMS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">CMS for Internal Use</Card.Subtitle>
              <Card.Text>
                CMS site for internal use. Includes -
                <ul>
                  <li>Authentication (Login / Register)</li>
                  <li>Management for contents and features</li>
                  <li>Dashboard</li>
                  <li>Report</li>
                </ul>
              </Card.Text>
              <div className='text-end'>
                <Button variant="warning" className="text-white" target="_blank" href="/cms">Preview &#8594;</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
      <div className='bg-dark w-100'>
      <div className='col-sm-6 offset-sm-3 text-center py-3'>
        <p><small className="text-light">© Powered by <span className="brand">addTech</span></small></p>
      </div>
    </div>
    </section>
  );
}

export default App;