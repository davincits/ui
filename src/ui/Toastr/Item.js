import React from 'react';
import IconClose from '../icons/CloseAnim';
import { classes } from '../utils';

function Item({
  title,
  message,
  delay,
  type,
  hide,
  onClose,
  closeElement,
}) {
  const classList = classes({
    'ui-toastr-item': true,
    [`ui-toastr-item-type-${type}`]: type,
    'ui-toastr-item-hide-animation': hide,
  });
  return (
    <div className={classList}>
      {!(title == null) && (<div className="ui-toastr-message">{title}</div>)}
      {!(message == null) && (<div className="ui-toastr-description">{message}</div>)}
      {
        closeElement ? (
          <div className="ui-toastr-close-element" onClick={onClose}>{closeElement}</div>
        ) : (
          <div className="ui-toastr-close" onClick={onClose}>
            <IconClose delay={delay} />
          </div>
        )
      }
    </div>
  );
}

export default Item;
