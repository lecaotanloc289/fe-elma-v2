import { useNavigate } from 'react-router';

const SocialIcon = ({ icon, link }: { icon: string; link: string }) => (
  <a href={link}>
    <i
      className={`fa-brands ${icon} fa-lg`}
      style={{ color: '#919EAB', cursor: 'pointer' }}
    />
  </a>
);

const IconButton = ({
  icon,
  size,
  iconColor,
  className,
  onClick,
}: {
  icon: string;
  size: string;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer flex justify-center items-center border w-[48px] h-[48px] text-dark-lightest border-gray-300 rounded-full ${className ?? ''}`}
  >
    <i className={`fa-solid ${icon} ${size} ${iconColor}`} />
  </div>
);

const HomeIcon = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate('/');
  };
  return (
    <div
      className="flex items-center justify-start gap-x-2 cursor-pointer"
      onClick={handleBackToHome}
    >
      <img
        src="/Elma.svg"
        alt="Logo"
        className="w-[21px] h-[19px] cursor-pointer"
      />
      <h4 className="text-[28px] font-bold">Elma</h4>
    </div>
  );
};
export { SocialIcon, IconButton, HomeIcon };
