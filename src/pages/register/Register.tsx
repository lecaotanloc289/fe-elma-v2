import { Button, IconButton } from '@/component';
import Wrapped from '@/component/Wrapped';
import MainLayout from '@/views/MainLayout';
import { Card, Checkbox, Divider, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import GradientImage from './GradientImage';
import { CustomInput } from '@/component/Input';
import { useNavigate } from 'react-router';

const Register = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+1</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };

  return (
    <MainLayout>
      <div className="my-[-300px] h-[340px] w-full bg-white-lighter mt-4"></div>
      <Wrapped>
        <div className="flex-center !space-x-10 py-10">
          <Card variant="borderless" className="w-[540px] p-4">
            <div className="flex-between">
              <h3 className="text-dark-title">Register to Elma</h3>
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
              <div className="grid grid-cols-2 gap-x-4">
                <Form.Item label="Your name">
                  <Input
                    className="!border-white-enough-light"
                    size="large"
                    placeholder="Your name"
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
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
              </div>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <CustomInput
                  className="!border-white-enough-light"
                  size="large"
                  addonBefore={prefixSelector}
                  style={{ width: '100%', borderColor: '#F4F6F8' }}
                  placeholder="0000 000 000"
                />
              </Form.Item>
              <div className="grid grid-cols-2 gap-x-4">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
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
                <Form.Item
                  name="confirm"
                  label="Repeat password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
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
                  <Input
                    className="!border-white-enough-light"
                    size="large"
                    placeholder=""
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
                // {...tailFormItemLayout}
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
                <Button className="!bg-indigo w-full text-white" type="submit">
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
