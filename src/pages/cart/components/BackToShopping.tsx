import { Button } from '@/components';
import { useNavigate } from 'react-router';

const BackToShopping = () => {
  const navigate = useNavigate();
  const handleBackToShopping = () => {
    navigate('/');
  };
  return (
    <Button
      onClick={handleBackToShopping}
      variant="outlined"
      className="text-indigo"
    >
      <i className="fa-solid fa-chevron-left fa-sm mr-1"></i>
      Back to shopping
    </Button>
  );
};

export { BackToShopping };
