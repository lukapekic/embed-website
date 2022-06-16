import { FunctionComponent } from "react";
import { Button } from "../../../../components";

import coverImage from "../../../../shared/assets/image/nightclub.jpg";
import style from "./Waitlist.module.scss";

export const WaitingListSection: FunctionComponent = () => {
  return (
    <section
      className={style["waitlist"]}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <h1 className={style["waitlist__title"]}>Join the waitlist</h1>
      <Button variant="secondary">Join waitlist</Button>
    </section>
  );
};
