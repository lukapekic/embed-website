import classNames from "classnames";
import { FunctionComponent } from "react";

import style from "./NavLink.module.scss";

interface NavLinkComponentProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  weight?: "light" | "bold";
}

export const NavLink: FunctionComponent<NavLinkComponentProps> = ({
  target = "_blank",
  variant = "primary",
  size = "large",
  weight = "bold",
  href,
  className,
  children,
  ...rest
}) => {
  return (
    <a
      target={target}
      href={href}
      className={classNames(
        {
          [style["navlink"]]: true,
          [style["navlink--secondary"]]: variant === "secondary",
          [style["navlink--size-small"]]: size === "small",
          [style["navlink--size-medium"]]: size === "medium",
          [style["navlink--weight-light"]]: weight === "light",
        },
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
