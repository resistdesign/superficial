import React, { FC } from 'react';
import SampleAST from './SampleAST';
import Superficial, { SuperficialComponentFactory, SuperficialFactoryComponent } from '../src';
import styled from 'styled-components';

type ASTInfo = {
  type: string;
  [key: string]: any;
};
type APISurfaceMap = {
  defaultExport?: ASTInfo;
  namedExports: ASTInfo[];
};
type ASTTypeInfoTransformMap = {
  [astType: string]: (astData: ASTInfo, map: APISurfaceMap, populateMap: (astData: any) => void) => void;
};

const getASTDateType = (astData: any, expand?: boolean, mergeObjectData?: { [key: string]: any }): any => {
  if (astData instanceof Array) {
    return astData.map((item) => getASTDateType(item)).reduce((acc, item) => (acc.indexOf(item) === -1 ? [...acc, item] : acc), []);
  } else if (astData instanceof Object) {
    if (typeof astData.type === 'string' && !expand) {
      return astData.type;
    } else if (astData.constructor && astData.constructor !== Object && typeof astData.constructor.name === 'string') {
      return astData.constructor.name;
    } else {
      const merged = {
        ...mergeObjectData,
        ...astData,
      };

      return Object.keys(merged).reduce((acc, k) => ({ ...acc, [k]: getASTDateType(merged[k]) }), {});
    }
  } else if (astData === null) {
    return 'null';
  } else {
    return typeof astData;
  }
};

const API_SURFACE_MAP: APISurfaceMap = {
  namedExports: [],
};
const TYPE_COLLECTION_MAP: { [type: string]: any } = {};
const AST_TYPE_INFO_TRANSFORM_MAP: ASTTypeInfoTransformMap = {
  ExportDefaultDeclaration: (astData, map, populateMap) => {
    map.defaultExport = astData;

    populateMap(astData.declaration);
  },
};
const populateAPISurfaceMap = (astData: any) => {
  if (astData instanceof Array) {
    astData.forEach((item) => populateAPISurfaceMap(item));
  } else if (astData instanceof Object) {
    if (typeof astData.type === 'string') {
      TYPE_COLLECTION_MAP[astData.type] = getASTDateType(astData, true, TYPE_COLLECTION_MAP[astData.type]);
    }

    if (typeof astData.type === 'string' && AST_TYPE_INFO_TRANSFORM_MAP[astData.type] instanceof Function) {
      AST_TYPE_INFO_TRANSFORM_MAP[astData.type](astData, API_SURFACE_MAP, populateAPISurfaceMap);
    }

    Object.keys(astData).forEach((k) => populateAPISurfaceMap(astData[k]));
  }
};

populateAPISurfaceMap(SampleAST);

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
  return (
    <>
      <pre>{JSON.stringify(TYPE_COLLECTION_MAP, null, 2)}</pre>
      <pre>{JSON.stringify(API_SURFACE_MAP, null, 2)}</pre>
    </>
  );
  // return <Superficial name="Base" data={SampleAST} componentFactory={componentFactory} />;
};

export default App;
