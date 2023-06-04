import "./style.scss";

import React, { memo, Children, cloneElement, useState, useCallback } from "react";
import { classNames } from "../utils";
import Toggle from "./Toggle";
import Collapse from "./Collapse";
import Title from "./Title";

const Accordion = memo((props) => {
  const {
    className,
    children,
    index: initialIndex = 0,
  } = props;
  const [index, setIndex] = useState(initialIndex);
  let toggleIndex = 0;
  let collapseIndex = 0;

  const handleChangeIndex = useCallback((idx) => setIndex(idx), []);

  return (
    <div className={classNames(["ui-component ui-accordion", className])}>
      {Children.map(children, (child) => {
        if (child.type === Toggle) {
          return cloneElement(child, {
            onChangeIndex: handleChangeIndex,
            index: toggleIndex,
            active: index === toggleIndex++,
          });
        }
        if (child.type === Collapse) {
          return cloneElement(child, { active: index === collapseIndex++ });
        }
        return child;
      })}
    </div>
  );
});

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;
Accordion.Title = Title;

export default Accordion;
