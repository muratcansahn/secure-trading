import React, { FC } from "react";

interface IButton {
  children: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IButton> = (props) => {
  const { children, onClick, className } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
