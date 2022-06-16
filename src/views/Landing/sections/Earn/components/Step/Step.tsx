import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FunctionComponent } from "react";
import style from "./Step.module.scss";

interface StepComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: any;
  title: string;
  items: string[];
}

export const Step: FunctionComponent<StepComponentProps> = ({
  icon,
  title,
  items,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classNames(style["step"], className)}>
      <div className={style["step__header"]}>
        <FontAwesomeIcon icon={icon} className={style["step__header-icon"]} />
        <h3 className={style["step__header-title"]}>{title}</h3>
      </div>
      <ol className={style["step__list"]}>
        {items.map((item) => {
          return <li className={style["step__item"]}>{item}</li>;
        })}
      </ol>
    </div>
  );
};
