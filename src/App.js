
import { Fragment } from 'react';
import './App.css';
import Cars from './components/Cars';
import Garage from './components/Garage';
import Apple from './components/Apple';
function App() {
  return (
    <Fragment>
      <Cars />
      <Garage />
      <Apple />
    </Fragment>
  );
}

export default App;
