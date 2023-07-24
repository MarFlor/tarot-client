import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './App.css';
import { Home } from './components/home';

function App() {  

  return (
    <div className="App">
       <Container>
          <Home />
      </Container>
      <Divider hidden />
      <Divider horizontal>
        If you know, you decide.
      </Divider>
      
      <Divider hidden>
        Saráh Tarot © {new Date().getFullYear()}
      </Divider>
    </div>
  );
  
}

export default App;
