import './App.css';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container} from "react-bootstrap"

function App() {
  return (
    <Container>
      <Col lg={3}/>
      <Col lg={5}>
        <Calculator/>
      </Col>
      <Col lg={4}/>
    </Container>
  );
}

export default App;
