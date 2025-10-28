import Wrapped from '@/components/Wrapped';
import { data } from '@/constants';
import { Checkbox, Form, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import MainLayout from '@/views/MainLayout';
import { CustomInput } from '@/components/Input';
import { Button } from '@/components';

const RegisterAlt = () => {
  const registerAltLeft = data.register_alt;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+1</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <MainLayout>
      <Wrapped>
        <div className="flex-between space-x-10">
          <div className="w-[540px] p-4">
            <h3 className="mb-4">{registerAltLeft?.headline ?? ''}</h3>
            <span className="text-[14px] leading-5 text-dark-label">
              {registerAltLeft?.subheadline ?? ''}
            </span>
            {registerAltLeft?.benefits.map(benefit => (
              <div
                key={`${benefit?.icon ?? ''}-${benefit?.title ?? ''}`}
                className="flex space-x-4 my-8"
              >
                <img
                  src={benefit?.icon ?? ''}
                  alt=""
                  className="w-[34px] h-[34px]"
                />
                <div className="flex flex-col gap-y-2 mt-2">
                  <span className="text-[18px] font-bold leading-5 tracking-[0.2px] text-dark-title">
                    {benefit?.title ?? ''}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[14px] leading-6  text-dark-text">
                      {benefit?.description ?? ''}
                    </span>
                    <span className="text-[14px] leading-6  text-dark-text">
                      {benefit?.note ?? ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form register */}
          <div className="w-[540px]">
            <div className="">
              <h3 className="">New Member on here?</h3>
              <span className="label">
                Register your account into us and you can start buy or sell your
                product in here. Follow all the steps to finish registration.
              </span>
            </div>
            <div className="mt-10">
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
                          : Promise.reject(
                              new Error('Should accept agreement')
                            ),
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
                <div className="flex-between items-center">
                  <Form.Item>
                    <Button
                      className="!bg-dark-indigo w-[285px] text-white"
                      type="submit"
                    >
                      Create Elma Account
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <span className="label">or</span>
                  </Form.Item>
                  <Form.Item>
                    <Button className="w-[120px] bg-white-enough-light text-dark-label">
                      Login
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
            {registerAltLeft.trusted_brands.map(brand => (
              <img key={brand ?? ''} src={brand ?? ''} alt="" className="" />
            ))}
          </div>
        </div>
      </Wrapped>
    </MainLayout>
  );
};

export default RegisterAlt;
