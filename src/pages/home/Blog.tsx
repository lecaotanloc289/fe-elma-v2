import { Button } from '@/component';
import Heading from '@/component/Heading';
import Wrapped from '@/component/Wrapped';
import { data } from '@/constants';

const Blog = () => {
  return (
    <Wrapped>
      <section className="flex-between">
        <Heading content={data.home.blog.header} />
        <Button className="text-indigo border-indigo" variant="outlined">
          More on blogs
        </Button>
      </section>
      <section className="grid grid-cols-3 gap-x-10 my-9">
        {data.home.blog.blogPosts.map((blog) => (
          <div key={blog.id} className="w-[350px]">
            <img src={blog?.image ?? ''} alt="" className="rounded-md" />
            <p className=" my-4.5 text-indigo font-normal">
              {blog?.date ?? ''}
            </p>
            <span className="font-[600] text-dark-title">
              {blog?.title ?? ''}
            </span>
            <p className="mt-3 text-dark-text font-[400]">
              {' '}
              {blog?.description ?? ''}
            </p>
          </div>
        ))}
      </section>
    </Wrapped>
  );
};

export default Blog;
