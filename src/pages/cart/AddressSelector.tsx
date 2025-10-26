import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const { TabPane } = Tabs;

export default function AddressSelector() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/p/').then(res => {
      setProvinces(res.data);
    });
  }, []);

  const handleSelectProvince = (province: any) => {
    setSelectedProvince(province);
    setSelectedDistrict(null);
    setWards([]);
    axios
      .get(`https://provinces.open-api.vn/api/p/${province.code}?depth=2`)
      .then(res => setDistricts(res.data.districts));
  };

  const handleSelectDistrict = (district: any) => {
    setSelectedDistrict(district);
    axios
      .get(`https://provinces.open-api.vn/api/d/${district.code}?depth=2`)
      .then(res => setWards(res.data.wards));
  };
  const handleSelectWard = (ward: any) => {
    setSelectedWard(ward);
    console.log(selectedProvince, selectedDistrict, ward);
  };

  return (
    <div className="">
      <div className="">{`${selectedProvince}, ${selectedDistrict},${selectedWard}`}</div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tỉnh/Thành phố" key="1">
          <ul>
            {provinces.map((p: any) => (
              <li
                key={p?.code ?? ''}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleSelectProvince(p)}
              >
                {p?.name ?? ''}
              </li>
            ))}
          </ul>
        </TabPane>

        <TabPane tab="Quận/Huyện" key="2" disabled={!selectedProvince}>
          <ul>
            {districts.map((d: any) => (
              <li
                key={d.code}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleSelectDistrict(d)}
              >
                {d.name}
              </li>
            ))}
          </ul>
        </TabPane>

        <TabPane tab="Phường/Xã" key="3" disabled={!selectedDistrict}>
          <ul>
            {wards.map((w: any) => (
              <li
                key={w.code}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => handleSelectWard(w)}
              >
                {w.name}
              </li>
            ))}
          </ul>
        </TabPane>
      </Tabs>
    </div>
  );
}

import { Radio } from 'antd';
import { data } from '@/constants';

const shippingMethods = data.cart.addressSelector.shippingMethods;

export function ShippingSelector() {
  const [value, setValue] = useState(1);

  return (
    <Radio.Group onChange={e => setValue(e.target.value)} value={value}>
      {shippingMethods.map(method => (
        <div
          key={method.id}
          className={`border p-4 my-2 rounded-md ${
            value === method.id ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        >
          <Radio value={method.id}>
            <div className="flex flex-col">
              <div className="font-semibold text-sm">
                {method.label} &nbsp;
                <span className="text-black">
                  ₫{method.price.toLocaleString()}
                </span>
              </div>
              <div className="text-green-600 text-sm">{method.guarantee}</div>
              <div className="text-gray-500 text-xs">{method.note}</div>
            </div>
          </Radio>
        </div>
      ))}
    </Radio.Group>
  );
}

const CustomRadio = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange} value={value}>
      <label className="custom-radio">
        <Radio value={1} className="hidden-radio" />
        <div className={`box ${value === 1 ? 'selected' : ''}`}>Option A</div>
      </label>
      <label className="custom-radio">
        <Radio value={2} className="hidden-radio" />
        <div className={`box ${value === 2 ? 'selected' : ''}`}>Option B</div>
      </label>
    </Radio.Group>
  );
};

export { CustomRadio };
