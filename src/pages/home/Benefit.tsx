import { Divider } from 'antd';

const Benefit = () => {
  const features = [
    {
      id: 1,
      icon: './images/Shipping.svg',
      name: 'Free Shipping',
      description: 'Free delivery for all orders',
      link: '',
    },
    {
      id: 2,
      icon: './images/Money.svg',
      name: 'Money Guarantee',
      description: '30 days money back',
      link: '',
    },
    {
      id: 3,
      icon: './images/Customer Service.svg',
      name: '24/7 Support',
      description: 'Friendly 24/7 support',
      link: '',
    },
    {
      id: 4,
      icon: './images/Card.svg',
      name: 'Secure Payment',
      description: 'All cards accepted',
      link: '',
    },
  ];

  return (
    <div className="w-4/5 mx-auto ">
      <div className="flex justify-between mt-12 mb-8">
        {features.map((feature) => (
          <div className="flex items-center " key={feature.id ?? ''}>
            <img
              src={feature.icon ?? ''}
              alt="Service image"
              width={40}
              height={40}
              className="mr-4"
            />
            <div className="">
              <h5 className="font-semibold, text-dark-title leading-[20px]">
                {feature.name ?? ''}
              </h5>
              <h6 className="text-dart-subtext">{feature.description ?? ''}</h6>
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Benefit;
