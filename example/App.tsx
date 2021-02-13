import React, { FC } from 'react';
import SampleAST from './SampleAST';
import Superficial, { SuperficialComponentFactory, SuperficialFactoryComponent } from '../src';
import styled from 'styled-components';

const Identifier = styled.div`
  background-color: darkorchid;
  color: white;
`;
const AssignmentPattern = styled.div`
  background-color: aqua;
`;
const Property = styled.div`
  background-color: chartreuse;
  color: black;
`;
const ExportDefaultDeclaration = styled.div`
  background-color: darkorange;
  color: white;
`;
const ClassProperty = styled.div`
  background-color: chocolate;
  color: yellow;
`;
const NoComp = () => null;

const COMPONENT_MAP: { [type: string]: SuperficialFactoryComponent | undefined } = {
  Program: ({ data }) => <Superficial name="body" data={data?.body} componentFactory={componentFactory} />,
  ImportDeclaration: NoComp,
  VariableDeclaration: NoComp,
  Literal: NoComp,
  ClassDeclaration: ({ data }) => <Superficial name="body" data={data?.body} componentFactory={componentFactory} />,
  ClassBody: ({ data }) => <Superficial name="body" data={data?.body} componentFactory={componentFactory} />,
  Property: ({ name, data }) => (
    <Property>
      <Superficial name="key" data={data?.key} componentFactory={componentFactory} />
      <Superficial name="value" data={data?.value} componentFactory={componentFactory} />
    </Property>
  ),
  ExportDefaultDeclaration: ({ name, data, children }) => (
    <ExportDefaultDeclaration data-name={name} data-type="AssignmentPattern">
      Default: {data?.declaration?.id?.name}
      {children}
    </ExportDefaultDeclaration>
  ),
  ClassProperty: ({ name, data, children }) => (
    <ClassProperty data-name={name} data-type="AssignmentPattern">
      {children}
    </ClassProperty>
  ),
  AssignmentPattern: ({ name, children }) => (
    <AssignmentPattern data-name={name} data-type="AssignmentPattern">
      {children}
    </AssignmentPattern>
  ),
  Identifier: ({ name, data }) => (
    <Identifier data-name={name} data-type="Identifier">
      {data?.name}
    </Identifier>
  ),
};
const componentFactory: SuperficialComponentFactory = ({ data }) => data && typeof data.type === 'string' && COMPONENT_MAP[data.type];

export const App: FC = () => {
  return <Superficial name="Base" data={SampleAST} componentFactory={componentFactory} />;
};

export default App;
