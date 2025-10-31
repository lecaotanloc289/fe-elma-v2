import { Button, IconButton } from '@/components';
import Wrapped from '@/components/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Card, Checkbox, Divider, Form, Input, Select, Spin } from 'antd';
import { Option } from 'antd/es/mentions';
import GradientImage from './GradientImage';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import {
  emailRules,
  fullnameRules,
  passwordRules,
  phoneRules,
} from './sign-up.rules';
import { useAuthStore } from '@/store/auth.store';
import { useMessageApi } from '@/services/hooks';
import { SignUpForm } from '@/interfaces';

type FieldType = {
  fullname?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirm_password?: string;
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="1">+1</Option>
      <Option value="84">+84</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

const Register = () => {
  const navigate = useNavigate();
  const message = useMessageApi();
  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };
  const signUp = useAuthStore(state => state.signUp);

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const hasErrors = () =>
    form.getFieldsError().some(({ errors }) => errors.length > 0);

  const onFinish = async (data: SignUpForm) => {
    // agreement, confirm_password, email, fullname, password, phone, prefix
    setLoading(true);
    const { email } = data;
    try {
      const result: any = await signUp(data);
      if (result?.success) {
        message.success(
          `Create account success for ${email}. Let login to Elma!`
        );
        navigate('/sign-in');
      } else {
        message.warning(result?.message);
      }
    } catch (error) {
      message.error('Sign up failed. Please try again.');
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      {loading && <Spin fullscreen />}
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="flex-center !space-x-10 py-10">
          <Card variant="borderless" className="w-[540px] p-4">
            <div className="flex-between">
              <h3 className="text-dark-title">Sign to Elma</h3>
              <span
                onClick={handleNavigateLogin}
                className="text-indigo cursor-pointer flex-center"
              >
                Sign In here
                <i className="text-[10px] mx-1 fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <div className="flex space-x-4 my-10">
              <button className="flex-center space-x-2 !bg-dark-lighter rounded-sm  w-full text-white !py-3">
                <img
                  src="/images/icons/google.svg"
                  alt="Google Icon"
                  width={23}
                />
                <h5 className="!text-white ">Register with Google</h5>
              </button>
              <IconButton
                icon="fa-brands fa-x-twitter fa-xl"
                size=""
                iconColor=""
                className="px-4 rounded-md bg-white-enough-light text-dark-lightest border-none "
              />
              <IconButton
                icon="fa-brands fa-facebook fa-xl"
                size=""
                iconColor=""
                className="px-4 rounded-md bg-white-enough-light text-dark-lightest border-none"
              />
            </div>
            <Divider />
            <Form
              name="SignUp"
              form={form}
              layout="vertical"
              className=""
              initialValues={{ prefix: '84', agreement: true }}
              onFinish={onFinish}
              autoComplete="off"
              validateTrigger={['onBlur', 'onSubmit', 'onChange']}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <Form.Item<FieldType>
                  label="Your name"
                  name={'fullname'}
                  rules={fullnameRules}
                  hasFeedback
                >
                  <Input size="large" placeholder="Enter your name" />
                </Form.Item>
                <Form.Item<FieldType>
                  label="Email"
                  name={'email'}
                  rules={[...emailRules]}
                  hasFeedback
                >
                  <Input size="large" placeholder="name@gmail.com" />
                </Form.Item>
              </div>
              <Form.Item<FieldType>
                name="phone"
                label="Phone Number"
                rules={phoneRules}
                hasFeedback
              >
                <Input
                  size="large"
                  addonBefore={prefixSelector}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <div className="grid grid-cols-2 gap-x-4">
                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={passwordRules}
                  hasFeedback
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm_password"
                  label="Confirm password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    ...passwordRules,
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'The new password that you entered do not match!'
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Confirm your password"
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error('Should accept agreement')),
                  },
                ]}
              >
                <Checkbox>
                  Agree about{' '}
                  <a className="cursor-pointer" href="">
                    Term & Privacy
                  </a>{' '}
                  on Elma
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  disabled={hasErrors()}
                  className="!bg-indigo w-full text-white"
                  type="submit"
                >
                  Create Elma Account
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <div className="w-[350px] h-full">
            <GradientImage />
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default Register;
