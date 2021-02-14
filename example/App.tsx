import React, { FC } from 'react';
import SampleAST from './SampleAST';
import Superficial, { SuperficialComponentFactory, SuperficialFactoryComponent } from '../src';
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { namedTypes as NamedTypes } from 'ast-types';

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

const AllNamedTypes = Object.keys(NamedTypes);
const mergeASTObjects = (a: { [key: string]: any } = {}, b: { [key: string]: any } = {}): { [key: string]: any } => ({
  ...a,
  ...b,
  ...Object.keys(b).reduce((acc, k) => {
    const aK = a[k];
    const bK = b[k];

    if (aK instanceof Array && bK instanceof Array) {
      return {
        ...acc,
        [k]: [...aK, ...bK].reduce((acc2, item) => (acc2.indexOf(item) === -1 ? [...acc2, item] : acc2), []),
      };
    } else if (aK instanceof Object && bK instanceof Object) {
      return {
        ...acc,
        [k]: mergeASTObjects(aK, bK),
      };
    }

    return acc;
  }, {}),
});
const getASTDateType = (astData: any, expand?: boolean, mergeObjectData: { [key: string]: any } = {}, parentKey: string | number = ''): any => {
  if (astData instanceof Array) {
    return astData
      .map((item, index) => getASTDateType(item, false, undefined, index))
      .reduce((acc, item) => (acc.indexOf(item) === -1 ? [...acc, item] : acc), []);
  } else if (astData instanceof Object) {
    if (typeof astData.type === 'string' && !expand) {
      return astData.type;
    } else if (astData.constructor && astData.constructor !== Object && typeof astData.constructor.name === 'string') {
      return astData.constructor.name;
    } else {
      const result: { [key: string]: any } = Object.keys(astData).reduce(
        (acc, k) => ({
          ...acc,
          [k]: parentKey === 'loc' && k === 'source' ? 'string | null' : getASTDateType(astData[k], false, undefined, k),
        }),
        {}
      );
      const merged = mergeASTObjects(mergeObjectData, result);

      if (typeof astData.type === 'string') {
        merged.type = astData.type;
      }

      return merged;
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
let TYPE_COLLECTION_MAP: { [type: string]: any } = {};
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
      TYPE_COLLECTION_MAP[astData.type] = getASTDateType(astData, true, TYPE_COLLECTION_MAP[astData.type], astData.type);
    }

    if (typeof astData.type === 'string' && AST_TYPE_INFO_TRANSFORM_MAP[astData.type] instanceof Function) {
      AST_TYPE_INFO_TRANSFORM_MAP[astData.type](astData, API_SURFACE_MAP, populateAPISurfaceMap);
    }

    Object.keys(astData).forEach((k) => populateAPISurfaceMap(astData[k]));
  }
};

populateAPISurfaceMap(SampleAST);

TYPE_COLLECTION_MAP = Object.keys(TYPE_COLLECTION_MAP)
  .sort()
  .reduce(
    (acc, k) => ({
      ...acc,
      [k]: TYPE_COLLECTION_MAP[k],
    }),
    {}
  );

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
  Property: ({ data }) => (
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
  ClassProperty: ({ name, children }) => (
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
      <ReactJson src={TYPE_COLLECTION_MAP} collapsed theme="monokai" displayObjectSize={false} displayDataTypes={false} />
      <ReactJson src={AllNamedTypes} collapsed theme="monokai" displayObjectSize={false} displayDataTypes={false} groupArraysAfterLength={Infinity} />
    </>
  );
  // return <Superficial name="Base" data={SampleAST} componentFactory={componentFactory} />;
};

export default App;
