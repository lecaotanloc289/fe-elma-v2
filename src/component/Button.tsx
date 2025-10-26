interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text' | 'link';
}

export const Button = ({
  variant = 'contained',
  className,
  ...props
}: ButtonProps) => {
  const base = 'px-4 py-2 rounded-[8px] !font-semibold text-[16px]';
  const variants = {
    contained: '!bg-indigo  outline-none',
    outlined: 'outline-1 outline-indigo !bg-white',
    text: '',
    link: '!bg-white !p-0 !m-0 ',
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className || ''}`}
    />
  );
};
