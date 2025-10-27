import { Button, IconButton } from '@/components';
import Wrapped from '@/components/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Card, Divider, Form, Input, Spin } from 'antd';
import GradientImage from '../sign-up/GradientImage';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/store';
import { useMessageApi } from '@/services/hooks/messageContext';
import { emailRules, passwordRules } from './sign-in.rules';
import { useState } from 'react';
import { SignInForm } from '@/interfaces';
type FieldType = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const signIn = useAuthStore(state => state.signIn);

  const message = useMessageApi();
  const navigate = useNavigate();

  const handleNavigateSignUp = () => {
    navigate('/sign-up');
  };

  const [form] = Form.useForm();

  const hasErrors = () =>
    form.getFieldsError().some(({ errors }) => errors.length > 0);

  const onFinish = async (data: SignInForm) => {
    setLoading(true);
    try {
      const result: any = await signIn(data);
      if (result?.success) {
        message.success('Login successful. Welcome to Elma!');
        // navigate('/home');
      }
      if (result?.success === false) {
        message.warning(result?.message || 'Invalid email or password.');
      }
    } catch (error) {
      message.error('Some thing went wrong, please try again later!');
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
              <h3 className="text-dark-title">Sign in to Elma</h3>
              <span
                onClick={handleNavigateSignUp}
                className="text-indigo cursor-pointer flex-center"
              >
                Sign Up here
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
                <h5 className="!text-white ">Sign in with Google</h5>
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
              form={form}
              layout="vertical"
              className=""
              onFinish={onFinish}
              validateTrigger={['onBlur', 'onSubmit', 'onChange']}
            >
              <Form.Item<FieldType>
                label="Email"
                name={'email'}
                rules={[...emailRules]}
                hasFeedback
              >
                <Input
                  size="large"
                  placeholder="Enter your email"
                  type="email"
                  // autoComplete="off"
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name={'password'}
                rules={passwordRules}
                hasFeedback
              >
                <Input.Password
                  type="password"
                  size="large"
                  // autoComplete="off"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <div className="mb-3 flex justify-end">
                <a href="">Forgot password?</a>
              </div>

              <Form.Item label={null}>
                <Button
                  className="!bg-dark-indigo w-full text-white"
                  type="submit"
                  disabled={hasErrors()}
                >
                  {loading ? 'Signing In ...' : 'Sign In'}
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

export default SignIn;
