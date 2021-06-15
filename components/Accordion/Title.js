import React, { memo } from "react";
import { classNames } from "../utils";
import IconPlus from "../icons/Plus";

const Title = memo(({ className, children }) => {
  return (
    <div className={classNames(["ui-component ui-accordion-title", className])}>
      <IconPlus />
      {children}
    </div>
  );
});

export default Title;
