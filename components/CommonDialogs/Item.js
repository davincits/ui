import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Dialog from '../Dialog';
import Button from '../Button';

export const DIALOG_ALERT = 'alert';
export const DIALOG_CONFIRM = 'confirm';

class Item extends PureComponent {
  state = {}

  onChange = (value) => {
    this.setState({ value });
  }

  onConfirm = () => {
    const { onConfirm } = this.props;
    const { value } = this.state;
    if (!this.confirmHook || this.confirmHook()) {
      onConfirm(value);
    }
  }

  setConfirmHook = (hook) => {
    this.confirmHook = hook;
  }

  render() {
    const {
      title,
      message,
      type,
      onCancel,
      textConfirm,
      textCancel = 'Cancel',
      confirmButton,
      cancelButton,
      render,
      className,
    } = this.props;
    const { value } = this.state;
    let actions = [];
    switch (type) {
      case DIALOG_ALERT:
        actions = (<Button primary stroke uppercase onClick={this.onConfirm}>{textConfirm || 'OK'}</Button>);
        break;
      case DIALOG_CONFIRM:
        actions = [(
          <div className="ui-common-dialog-button-wrapper ui-common-dialog-button-cancel-wrapper" onClick={onCancel}>
            {cancelButton || (
              <Button danger stroke uppercase>{textCancel}</Button>
            )}
          </div>
        ), (
          <div className="ui-common-dialog-button-wrapper ui-common-dialog-button-confirm-wrapper" onClick={this.onConfirm}>
            {confirmButton || (
              <Button primary stroke uppercase>{textConfirm || 'Confirm'}</Button>
            )}
          </div>
        ),
        ];
        break;
      default:
    }
    return (
      <Dialog
        className={
          classes([
            'ui-common-dialog-item',
            `ui-common-dialog-item-type-${type}`,
            className,
          ])
        }
        title={title}
        actions={actions}
        onClose={onCancel}
      >
        {message}
        {render && render({
          value,
          onChange: this.onChange,
          setConfirmHook: this.setConfirmHook,
        })}
      </Dialog>
    );
  }
}

export default Item;
