import { Button } from '@/components';
import Wrapped from '@/components/Wrapped';
import { data } from '@/constants';
import { useCommonStore } from '@/store';
import { Divider } from 'antd';
import { useNavigate } from 'react-router';

const Category = () => {
  const navigate = useNavigate();
  const categories = useCommonStore(state => state.categories);

  return (
    <Wrapped className="my-12.5">
      <div className="flex-between my-7">
        <h3 className="">Category</h3>
        <Button
          onClick={() => navigate('/category')}
          className="border-indigo text-indigo"
          variant="outlined"
        >
          View all
        </Button>
      </div>
      <div className="flex-between">
        {data?.home?.categories?.map(category => (
          <div className="flex-center flex-col gap-y-4">
            <img
              width={56}
              height={56}
              src={category?.icon ?? ''}
              alt=""
              className="py-4"
            />
            <p className="text-dark-title font-bold">{category?.name ?? ''}</p>
            <p className="text-dark-text font-normal">
              {category?.items ?? ''}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="flex-between">
        {categories.map(category => (
          <div className="flex-center flex-col gap-y-4">
            <img
              width={56}
              height={56}
              src={category?.icon ?? ''}
              alt=""
              className="py-4"
            />
            <p className="text-dark-title font-bold">{category?.name ?? ''}</p>
            <p className="text-dark-text font-normal">
              {category?.description ?? ''}
            </p>
          </div>
        ))}
      </div> */}
      <Divider />
    </Wrapped>
  );
};

export default Category;
