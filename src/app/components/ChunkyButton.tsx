import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'success';

interface BaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ChunkyButtonProps = ButtonProps | AnchorProps;

function isAnchor(props: ChunkyButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === 'string';
}

export function ChunkyButton(props: ChunkyButtonProps) {
  const { variant = 'primary', children, className = '', ...rest } = props;

  const variantClass = `chunky-btn chunky-btn-${variant}`;
  const combinedClass = `${variantClass} ${className}`.trim();

  if (isAnchor(props)) {
    const { variant: _v, children: _c, className: _cl, ...anchorRest } = props;
    return (
      <a className={combinedClass} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { variant: _v, children: _c, className: _cl, ...buttonRest } = props as ButtonProps;
  return (
    <button className={combinedClass} {...buttonRest}>
      {children}
    </button>
  );
}
