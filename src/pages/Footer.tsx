import { HomeIcon, SocialIcon } from '@/components';
import { data } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-full bg-white-lighter py-12">
        <div className="w-4/5 mx-auto flex justify-between">
          <div className="">
            <HomeIcon />
          </div>
          <div className="grid grid-cols-4 gap-12">
            {data.footer.footerNavigation.map((item, key) => (
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
            {data.footer.socialIcons.map(icon => (
              <SocialIcon key={icon.id} icon={icon.name} link={icon.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
