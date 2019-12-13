import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Dialog from '../Dialog';
import Button from '../Button';

export const DIALOG_ALERT = 'alert';
export const DIALOG_CONFIRM = 'confirm';

class Item extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      textConfirm = 'Confirm',
      textCancel = 'Cancel',
      confirmButton = (<Button primary stroke uppercase>{textConfirm || 'Confirm'}</Button>),
      cancelButton = (<Button danger stroke uppercase>{textCancel}</Button>),
      render,
      className,
    } = this.props;
    const { value } = this.state;
    const actions = [];
    if (type === DIALOG_CONFIRM) {
      actions.push((
        <div
          className="ui-common-dialog-button-wrapper ui-common-dialog-button-cancel-wrapper"
          onClick={onCancel}
        >
          {cancelButton}
        </div>
      ));
    }
    actions.push((
      <div
        className="ui-common-dialog-button-wrapper ui-common-dialog-button-confirm-wrapper"
        onClick={this.onConfirm}
      >
        {confirmButton}
      </div>
    ));
    return (
      <Dialog
        className={
          classes([
            'ui-component ui-common-dialog-item',
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
          onCancel,
          onConfirm: this.onConfirm,
        })}
      </Dialog>
    );
  }
}

export default Item;
