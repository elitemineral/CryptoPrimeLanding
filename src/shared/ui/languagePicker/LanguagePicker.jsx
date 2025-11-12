import React from 'react';
import { Select, Option } from '@material-tailwind/react';

export function LanguagePicker({ className, value, onChange }) {
  return (
    <Select
      // className={className}
      variant='static'
      value={value}
      onChange={onChange}
    >
      {options.map((o) => (
        <Option key={o.value} value={o.value}>
          {o.label}
        </Option>
      ))}
    </Select>
  );
}

const options = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Русский',
    value: 'ru',
  },
];
