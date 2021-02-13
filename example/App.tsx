import React, { FC } from 'react';
import SampleAST from './SampleAST';
import Superficial from '../src';

export const App: FC = () => {
  return <Superficial data={SampleAST} />;
};

export default App;
