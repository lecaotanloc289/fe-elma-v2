const Wrapped = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return <div className={`w-4/5 mx-auto ${className ?? ''}`}>{children}</div>;
};

export default Wrapped;
