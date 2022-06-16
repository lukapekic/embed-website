import { FunctionComponent } from "react";
import { Button } from "../../../../components";
import { Step } from "./components";

import { steps } from "./data";
import style from "./Earn.module.scss";

export const EarnSection: FunctionComponent = () => {
  return (
    <section className={style["earn"]}>
      <div className={style["earn__title-wrapper"]}>
        <h1 className={style["earn__title"]}>How to earn with Embed</h1>
        <p className={style["earn__title-subtitle"]}>
          Three simple steps to get you started.
        </p>
      </div>
      <div className={style["earn__steps"]}>
        {steps.map(({ icon, items, title }) => {
          return (
            <Step
              icon={icon}
              title={title}
              items={items}
              className={style["earn__steps-item"]}
            />
          );
        })}
      </div>
      <div className={style["earn__cta-wrapper"]}>
        <h3 className={style["earn__cta-text"]}>Be part of the alpha launch</h3>
        <Button>Join waitlist</Button>
      </div>
    </section>
  );
};
