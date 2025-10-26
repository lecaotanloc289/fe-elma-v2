import { Button, IconButton } from '@/component';
import { data } from '@/constants';
import { Avatar, Divider, Image, Rate } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { useState } from 'react';

const Comment = () => {
  const reviews = data.product_detail.comments;

  const [ellipsis, setEllipsis] = useState(true);

  return (
    <div className="">
      {reviews.map(review => (
        <div className="mt-10">
          <div className="flex-between">
            <div className="flex gap-x-4">
              <Avatar
                size={48}
                src={<img src={review?.user.avatar} alt="avatar" />}
              />
              <div className="flex flex-col justify-between my-0.5">
                <span className="font-medium text-[14px] leading-5 text-dark-title">
                  {review?.user?.name ?? ''}
                </span>
                <span className="font-normal text-[14px] leading-5 text-dark-text">
                  {review?.user?.date ?? ''}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Rate value={5} className="text-yellow !text-[16px]" />
              <span className="font-normal text-[14px] leading-5 text-dark-text">
                {review?.helpfulPercentage ?? ''}% of users found this review
                helpful
              </span>
            </div>
            <div className="flex gap-x-4">
              <IconButton
                size="small"
                icon="fa-thumbs-up"
                className="rounded-lg "
                iconColor="text-green"
              />
              <IconButton
                size="small"
                icon="fa-thumbs-down"
                className="rounded-lg"
                // iconColor="text-white-dark-light"
                iconColor="text-red"
              />
            </div>
          </div>
          <div className="my-4">
            <Paragraph
              className="!text-dark-label"
              ellipsis={
                ellipsis
                  ? { rows: 2, expandable: true, symbol: 'Read more' }
                  : false
              }
            >
              {review?.content?.text ?? ''}
            </Paragraph>
          </div>
          <div className="space-x-4">
            {review?.content?.media.map(item => (
              <Image width={80} src={item} />
            ))}
          </div>
          <Divider />
        </div>
      ))}
      <div className="flex-center my-10">
        <Button variant="text" className="!bg-white text-indigo space-x-2">
          <i className="fa-regular fa-rotate-right fa-flip-horizontal"></i>
          <span>Load more reviews</span>
        </Button>
      </div>
    </div>
  );
};

export default Comment;
