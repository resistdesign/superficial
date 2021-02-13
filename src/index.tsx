import React, { FC, useMemo } from 'react';

type StringObject = { [key: string]: string };

const DATA_PROP_PREFIX = 'data-superficial-';

export const getPrefixedProps = (data: StringObject | string): StringObject | string =>
  typeof data !== 'string'
    ? Object.keys(data).reduce(
        (acc, k) => ({
          ...acc,
          [`${DATA_PROP_PREFIX}${k}`]: data[k],
        }),
        {}
      )
    : data;

export const getDataProps = (data: any, terminate = false): { [key: string]: string } | string => {
  if (data instanceof Array) {
    if (terminate) {
      return 'Object';
    } else {
      return {
        length: `${data.length}`,
      };
    }
  } else if (data instanceof Object) {
    if (terminate) {
      return 'Object';
    } else {
      return Object.keys(data).reduce(
        (acc, k) => ({
          ...acc,
          [k]: getDataProps(data[k], true),
        }),
        {}
      );
    }
  } else {
    return `${data}`;
  }
};

export type SuperficialProps = {
  name: string;
  data: any;
};

export const Superficial: FC<SuperficialProps> = ({ name, data }) => {
  const dataProps = useMemo(() => {
    const dP = getPrefixedProps(getDataProps(data));

    return typeof dP === 'string' ? {} : dP;
  }, [data]);
  const elements =
    data instanceof Array
      ? data.map((item, i) => <Superficial key={`Element:${i}`} name={`${i}`} data={item} />)
      : data instanceof Object
      ? Object.keys(data).map((k) => <Superficial key={`Element:${k}`} name={k} data={data[k]} />)
      : `${data}`;

  return (
    <div data-meta-superficial-name={name} {...dataProps}>
      {elements}
    </div>
  );
};

export default Superficial;
