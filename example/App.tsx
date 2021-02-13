import React, { FC } from 'react';
import SampleAST from './SampleAST';
import Superficial, { SuperficialComponentFactory, SuperficialFactoryComponent } from '../src';
import styled from 'styled-components';

const Identifier = styled.div`
  background-color: darkorchid;
  color: white;
`;

const COMPONENT_MAP: { [type: string]: SuperficialFactoryComponent | undefined } = {
  Identifier: ({ name, children }) => (
    <Identifier data-name={name} data-type="Identifier">
      {children}
    </Identifier>
  ),
};
const componentFactory: SuperficialComponentFactory = ({ data }) => data && typeof data.type === 'string' && COMPONENT_MAP[data.type];

export const App: FC = () => {
  return <Superficial name="Base" data={SampleAST} componentFactory={componentFactory} />;
};

export default App;
