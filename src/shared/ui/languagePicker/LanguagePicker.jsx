import Select from 'antd/es/select';

export function LanguagePicker({ className, value, onChange }) {
  return (
    <Select
      className={className}
      value={value}
      onChange={onChange}
      options={options}
    />
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
