import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { Home } from './components/home';

function App() {  

  return (
    <div className="App">
       <Container fluid>
          <Home />
      </Container>
    </div>
  );
  
}

export default App;
