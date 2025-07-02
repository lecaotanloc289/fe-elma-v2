interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button = ({
  variant = 'contained',
  className,
  ...props
}: ButtonProps) => {
  const base = 'px-4 py-2 rounded-[8px] font-semibold! text-[16px]';
  const variants = {
    contained: '!bg-indigo  outline-none',
    outlined: 'outline-1 outline-indigo',
    text: '',
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className || ''}`}
    />
  );
};
