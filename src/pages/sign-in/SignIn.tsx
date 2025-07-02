import { Button, IconButton } from '@/component';
import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Card, Divider, Form, Input } from 'antd';
import GradientImage from '../register/GradientImage';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate('/register');
  };

  return (
    <MainLayout>
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="flex-center !space-x-10 py-10">
          <Card variant="borderless" className="w-[540px] p-4">
            <div className="flex-between">
              <h3 className="text-dark-title">Sign in to Elma</h3>
              <span
                onClick={handleNavigateLogin}
                className="text-indigo cursor-pointer flex-center"
              >
                Register here
                <i className="text-[10px] mx-1 fa-solid fa-chevron-right"></i>
              </span>
            </div>
            <div className="flex space-x-4 my-10">
              <button className="flex-center space-x-2 !bg-dark-lighter rounded-sm  w-full text-white !py-3">
                <i className="fa-brands fa-google fa-xl"></i>
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
            <Form layout="vertical" className="">
              <Form.Item
                label="Username or Email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input
                  className="!border-white-enough-light"
                  size="large"
                  placeholder="name@gmail.com"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="!border-white-enough-light"
                  size="large"
                  placeholder=""
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="!bg-dark-indigo w-full text-white"
                  type="submit"
                >
                  Sign In
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
