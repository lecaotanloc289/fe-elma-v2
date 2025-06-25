interface Content {
  heading?: string;
  description?: string;
}

interface HeadindProps {
  content?: Content;
  className?: string;
}
const Heading = ({ content, className }: HeadindProps) => {
  return (
    <div className={`flex flex-col ${className ?? ''}`}>
      <h2 className="mb-3.5">{content?.heading ?? ''}</h2>
      <h5 className="">{content?.description ?? ''}</h5>
    </div>
  );
};

export default Heading;
