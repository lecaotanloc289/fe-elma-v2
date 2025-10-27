import type { Rule } from 'antd/es/form';

export const emailRules: Rule[] = [
  { required: true, whitespace: true, message: 'Please enter your email' },
  { type: 'email', message: 'Email is not valid' },
  { max: 100, message: 'Email is too long' },
  // Trim trước khi validate (AntD support transform trong rule)
  { transform: v => (typeof v === 'string' ? v.trim() : v) },
];

export const passwordRules: Rule[] = [
  { required: true, message: 'Please enter your password' },
  // { min: 8, message: 'At least 8 characters' },
  // {
  //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
  //   message: 'Include upper, lower, number, and a special character',
  // },
];
