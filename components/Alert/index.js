import "./style.scss";

import React, { memo, useCallback, useState } from "react";
import { classNames } from "../utils";
import IconClose from "../icons/Close";

const DEFAULT_DELAY = 300;

const Alert = memo(({
  className,
  children,
  closeable = true,
  onClose,
  delay = DEFAULT_DELAY,
}) => {
  const [showed, setShowed] = useState(true);
  const [displayed, setDisplayed] = useState(true);

  const handleCloseClick = useCallback(() => {
    setShowed(false);
    setTimeout(() => {
      setDisplayed(false);
      if (onClose) onClose();
    }, delay || 0);
  }, []);

  if (!displayed) {
    return null;
  }

  return (
    <div className={classNames(["ui-component ui-alert", showed && "ui-showed", className])}>
      {Boolean(closeable) && (
        <div className="ui-close" onClick={handleCloseClick}>
          <IconClose />
        </div>
      )}
      <div className="ui-alert-content">
        {children}
      </div>
    </div>
  );
});

export default Alert;
