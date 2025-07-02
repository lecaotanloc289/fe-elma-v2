import { Button, IconButton } from '@/component';
import { Avatar, Divider, Image, Rate } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import React, { useState } from 'react';

const Comment = () => {
  const reviews = [
    {
      user: {
        name: 'Daisy Murphy',
        avatar:
          'https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'July 23, 2020',
      },
      rating: 5,
      helpfulPercentage: 83,
      content: {
        text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006. Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
        readMoreLink: '#',
        media: [
          'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
      },
      feedback: {
        likes: 1,
        dislikes: 0,
        userLiked: true,
        userDisliked: false,
      },
    },
    {
      user: {
        name: 'Hector Mariano',
        avatar:
          'https://images.unsplash.com/photo-1751042822183-709049032563?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'July 23, 2020',
      },
      rating: 5,
      helpfulPercentage: 83,
      content: {
        text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
        readMoreLink: '#',
        media: [],
      },
      feedback: {
        likes: 1,
        dislikes: 0,
        userLiked: false,
        userDisliked: true,
      },
    },
    {
      user: {
        name: 'Hector Mariano',
        avatar:
          'https://images.unsplash.com/photo-1751042822183-709049032563?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: 'July 23, 2020',
      },
      rating: 5,
      helpfulPercentage: 83,
      content: {
        text: "Sony α, is a camera system introduced on 5 June 2006. It uses and expands upon Konica Minolta camera technologies, including the Minolta AF SLR lens mount, whose assets were acquired by Sony after the end of Konica Minolta's photography operations in early 2006.",
        readMoreLink: '#',
        media: [],
      },
      feedback: {
        likes: 1,
        dislikes: 0,
        userLiked: false,
        userDisliked: true,
      },
    },
  ];

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
