import React from 'react';
import jumboData from './fixtures/jumbo';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
          <p>{item.image}</p>
          <p>{item.alt}</p>
        </Jumbotron>;
      })}
    </Jumbotron.Container>
  );
}

export default App;
