import React from 'react';
import { TOASTR_DEFAULT, DELLAY } from './constants';
import IconClose from '../icons/CloseAnim';
import { isNull, classes } from '../utils';

function Item({
  title = null,
  message = null,
  delay = DELLAY,
  type = TOASTR_DEFAULT,
  hide,
  onClose,
  closeElement,
}) {
  const classList = classes({
    'ui-toastr-item': true,
    [`ui-toastr-item ui-toastr-item-type-${type}`]: type,
    'ui-toastr-item-hide-animation': hide,
  });
  return (
    <div className={classList}>
      {!isNull(title) && (<div className="ui-toastr-message">{title}</div>)}
      {!isNull(message) && (<div className="ui-toastr-description">{message}</div>)}
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
