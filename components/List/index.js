import "./style.scss";

import React from "react";
import Item from "./Item";
import { classes } from "../utils";

function List({
  className,
  children,
  items,
  value,
  onClick,
  imageSize = "medium",
  checkbox,
  notActive,
  isSelected,
  ...props
}) {
  return (
    <div className={classes(["ui-component ui-list", className, `ui-list-images-${imageSize}`])} {...props}>
      {items ? items.map((item, index) => (
        <Item
          key={item.id || index}
          item={item}
          onClick={onClick}
          checkbox={checkbox}
          checked={checkbox && isSelected && isSelected(item)}
          notActive={notActive} />
      )) : children}
    </div>
  );
}


export default List;
