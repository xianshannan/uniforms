import RadioAntD, { RadioProps } from 'antd/lib/radio';
import React from 'react';
import { FieldProps, connectField, filterDOMProps } from 'uniforms';

import wrapField from './wrapField';

export type RadioFieldProps = FieldProps<
  string,
  RadioProps,
  { allowedValues?: string[]; transform?(value: string): string }
>;

function Radio(props: RadioFieldProps) {
  return wrapField(
    props,
    <RadioAntD.Group
      disabled={props.disabled}
      name={props.name}
      onChange={event => props.onChange(event.target.value)}
      value={props.value ?? ''}
      {...filterDOMProps(props)}
    >
      {props.allowedValues?.map(value => (
        <RadioAntD
          key={value}
          value={value}
          style={{
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          }}
        >
          {props.transform ? props.transform(value) : value}
        </RadioAntD>
      ))}
    </RadioAntD.Group>,
  );
}

export default connectField(Radio, { kind: 'leaf' });
