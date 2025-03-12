import { Divider, Select } from 'antd';
const AppBar = () => {
  const handleChange = () => {};
  return (
    <div className="w-3/4 mx-auto p-4">
      <div className="flex justify-between">
        <div className="flex justify-evenly gap-2">
          <i
            className="fa-brands fa-square-facebook fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-twitter fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-youtube fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: '#919EAB' }}
          ></i>
        </div>
        <div className="flex justify-evenly gap-2">
          <p>Order tracking</p>
          <p>Help</p>
          <Select
            defaultValue="vn"
            style={{ width: 120, border: '0px' }}
            onChange={handleChange}
            options={[
              { value: 'vn', label: 'Vietnam' },
              { value: 'en', label: 'English (US)' },
              { value: 'cn', label: 'China' },
              { value: 'gm', label: 'Germany' },
            ]}
          />
        </div>
      </div>

      <Divider />
      <h1 className="text-xl font-bold">Content inside 75% width container</h1>
      <h1>Hello world</h1>
      <i className="fa-regular fa-camera"></i>
    </div>
  );
};

export default AppBar;
