import Wrapped from '@/component/Wrapped';
import { data } from '@/constants';
import { Card, Checkbox, Form, Input } from 'antd';
import MainLayout from '@/views/MainLayout';
import { Button } from '@/component';

const SignInAlt = () => {
  const signInAlt = data.sign_in_alt;

  return (
    <MainLayout>
      <Wrapped>
        <div className="flex-between space-x-10">
          <div className="w-[540px] p-4">
            <h3 className="mb-4">{signInAlt?.headline ?? ''}</h3>
            <span className="text-[14px] leading-5 text-dark-label">
              {signInAlt?.subheadline ?? ''}
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-4 ">
              {signInAlt?.benefits.map(benefit => (
                <Card variant="outlined">
                  <div
                    key={`${benefit?.icon ?? ''}-${benefit?.title ?? ''}`}
                    className="flex flex-col space-y-2"
                  >
                    <img
                      src={benefit?.icon ?? ''}
                      alt=""
                      className="w-[34px] h-[34px]"
                    />
                    <span className="text-[18px] font-[500] leading-5 tracking-[0.2px] text-dark-title">
                      {benefit?.title ?? ''}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[14px] leading-6  text-dark-text">
                        {benefit?.description ?? ''}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Form signIn */}
          <div className="w-[540px] p-4">
            <div className="">
              <h3 className="">Welcome back</h3>
              <span className="label">
                Welcome our lovely user. You miss transaction on Elma. Don’t
                worry, you just need insert your username and email to start
                shopping again.
              </span>
            </div>
            <div className="mt-10">
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
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error('Should accept agreement')
                            ),
                    },
                  ]}
                  // {...tailFormItemLayout}
                >
                  <Checkbox>Stay signed for a week</Checkbox>
                </Form.Item>
                <div className="flex-between items-center">
                  <Form.Item>
                    <Button
                      className="!bg-dark-indigo w-[285px] text-white"
                      type="submit"
                    >
                      Login now
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <span className="label">or</span>
                  </Form.Item>
                  <Form.Item>
                    <Button className="w-[120px] !bg-white-enough-light text-dark-label">
                      Register
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20 space-y-8">
          <div className="flex-center">
            <h3 className="">Trusted by leading brand in the world</h3>
          </div>
          <div className="flex-between">
            {signInAlt.trusted_brands.map(brand => (
              <img key={brand ?? ''} src={brand ?? ''} alt="" className="" />
            ))}
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default SignInAlt;
