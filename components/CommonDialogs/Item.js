import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Dialog from '../Dialog';
import Button from '../Button';

export const DIALOG_ALERT = 'alert';
export const DIALOG_CONFIRM = 'confirm';

class Item extends PureComponent {
  onChange = (value) => {
    this.setState({ value });
  }

  onConfirm = () => {
    const { onConfirm } = this.props;
    const { value } = this.state;
    onConfirm(value);
  }

  render() {
    const {
      title,
      message,
      type,
      onCancel,
      textConfirm,
      textCancel = 'Cancel',
      render,
    } = this.props;
    const { value } = this.state;
    let actions = [];
    switch (type) {
      case DIALOG_ALERT:
        actions = (<Button primary uppercase onClick={this.onConfirm}>{textConfirm || 'OK'}</Button>);
        break;
      case DIALOG_CONFIRM:
        actions = [
          (<Button primary uppercase onClick={this.onConfirm}>{textConfirm || 'Confirm'}</Button>),
          (<Button danger uppercase onClick={onCancel}>{textCancel}</Button>),
        ];
        break;
      default:
    }
    return (
      <Dialog
        className={classes(['ui-common-dialog-item', `ui-common-dialog-item-type-${type}`])}
        title={title}
        actions={actions}
        onClose={onCancel}
      >
        {message}
        {render && render({ value, onChange: this.onChange })}
      </Dialog>
    );
  }
}

export default Item;
