import cx from 'classix';

type TLink = {
  url: string;
  onClick?: () =>  void;
  target?: '_self' | '_blank' | '_parent' | '_top';
  typography?: string
}

const Link: FCClass<TLink> = ({
  url,
  children,
  className,
  typography = 'h4',
  target,
  onClick,
  ...props
}) => {

  return (
    <a
      href={url}
      className={cx(className, typography)}
      onClick={onClick}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;