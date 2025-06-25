import { HomeIcon, SocialIcon } from '@/component';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialIcons = [
    { id: 1, name: 'fa-square-facebook', link: '' },
    { id: 2, name: 'fa-twitter', link: '' },
    { id: 3, name: 'fa-linkedin', link: '' },
    { id: 4, name: 'fa-instagram', link: '' },
    { id: 4, name: 'fa-github', link: '' },
  ];
  const footerNavigation = [
    {
      heading: 'First Menu',
      links: [
        'Features',
        'Enterprise',
        'Security',
        'Customer Stories',
        'Pricing',
        'Demo',
      ],
    },
    {
      heading: 'Second Menu',
      links: [
        'Engineering',
        'Financial Services',
        'Sales',
        'IT',
        'Customer Support',
        'Human Resources',
        'Media',
      ],
    },
    {
      heading: 'Third Menu',
      links: [
        'Tips',
        'Blog',
        'Event',
        'Certified Program',
        'Help Center',
        'API',
        'Download Template',
      ],
    },
    {
      heading: 'Fourth Menu',
      links: [
        'About Us',
        'Leadership',
        'News',
        'Media Kit',
        'Career',
        'Documentation',
      ],
    },
  ];

  return (
    <div>
      <div className="w-full bg-white-lighter py-12">
        <div className="w-4/5 mx-auto flex justify-between">
          <div className="">
            <HomeIcon />
          </div>
          <div className="grid grid-cols-4 gap-12">
            {footerNavigation.map((item, key) => (
              <div key={key} className="">
                <h5 className="cursor-pointer text-dark-title leading-[20px] tracking-[0.18px]">
                  {item.heading}
                </h5>
                {item.links.map((link, key) => (
                  <p
                    key={key}
                    className="cursor-pointer font-normal text-dark-title my-4"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F4F6F8' }} className="w-full py-4 ">
        <div className="w-4/5 mx-auto flex items-center justify-between">
          <span>Elma © Copyright {currentYear} Inc. All rights reserved</span>
          <div className="flex justify-evenly gap-2 mr-4">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.id} icon={icon.name} link={icon.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
