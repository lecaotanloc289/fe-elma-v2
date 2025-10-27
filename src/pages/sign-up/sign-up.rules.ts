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
  { max: 120, message: 'Password is too long' },
  { min: 8, message: 'At least 8 characters' },
  {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
    message: 'Include upper, lower, number, and a special character',
  },
];

export const fullnameRules: Rule[] = [
  { required: true, whitespace: true, message: 'Please enter your name' },
  { max: 120, message: 'Your name is too long' },
  { min: 2, message: 'Name is too short' },
  { transform: v => (typeof v === 'string' ? v.trim() : v) },
];

export const phoneRules: Rule[] = [
  { required: true, message: 'Please enter your phone' },
  { max: 120, message: 'Your phone is too long' },
  { min: 10, message: 'Phone is too short' },
  {
    pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    message: 'Invalid phone number format',
  },
  { transform: v => (typeof v === 'string' ? v.trim() : v) },
];
