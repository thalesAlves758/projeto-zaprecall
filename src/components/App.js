import InitialDisplay from "./InitialDisplay";
import MainDisplay from './MainDisplay';
import { useState } from 'react';

export default function App () {
  const [display, setDisplay] = useState('initial');

  return (
    <>
      {
        display === 'initial' ?
        <InitialDisplay setDisplay={setDisplay} /> :
        <MainDisplay />
      }
    </>
  );
}
