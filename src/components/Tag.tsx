import { Tag } from 'antd';

export const ElmaShopTag = ({ rank }: { rank: number }) => {
  switch (rank) {
    case 1:
      return (
        <Tag color="#D0011B" className="w-fit h-fit font-bold">
          Mall
        </Tag>
      );
    case 2:
      return (
        <Tag color="#F49342" className="w-fit h-fit font-bold">
          Favorite +
        </Tag>
      );
    case 3:
      return (
        <Tag color="#EEC200" className="w-fit h-fit font-bold">
          Favorite
        </Tag>
      );
    default:
      return null;
  }
};
