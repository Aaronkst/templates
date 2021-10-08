import './App.scss';
import { Button, Card } from 'react-bootstrap';

function App() {
  return (
    <section className='bg-info'>
      <div className='my-auto'>
        <header className='text-white text-center display-2'>Templates</header>
        <br/>
        <div className='col-sm-8 offset-sm-2'>
          <Card className="mx-auto shadow" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Estate Agency</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Hotel Agency, Housing Agency, etc.</Card.Subtitle>
              <Card.Text>
                Website made for searching hotels/homes. Includes -
                <ul>
                  <li>Authentication (Login / Signup)</li>
                  <li>Search Engine</li>
                  <li>User upload</li>
                  <li>Realtime comments (Optional)</li>
                </ul>
              </Card.Text>
              <div className='text-end'>
                <Button variant="warning" className="text-white" target="_blank" href="/hotel">Preview &#8594;</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default App;