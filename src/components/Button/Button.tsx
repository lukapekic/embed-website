import classNames from "classnames";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import style from "./Button.module.scss";

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: FunctionComponent<ButtonComponentProps> = ({
  className,
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        {
          [style["button"]]: true,
          [style["button--secondary"]]: variant === "secondary",
        },
        className
      )}
      {...rest}
    >
      {children}
      <FontAwesomeIcon icon={faArrowRight} className={style["button__icon"]} />
    </button>
  );
};
