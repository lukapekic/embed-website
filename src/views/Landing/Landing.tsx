import { FunctionComponent } from "react";
import { WaitingListSection, EarnSection } from "./sections";

export const LandingPageView: FunctionComponent = () => {
  return (
    <>
      <EarnSection />
      <WaitingListSection />
    </>
  );
};
