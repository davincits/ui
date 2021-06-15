import React, { PureComponent } from "react";
import { classes } from "../utils";
import Dialog from "../Dialog";
import Button from "../Button";

export const DIALOG_ALERT = "alert";
export const DIALOG_CONFIRM = "confirm";
export const DIALOG_CUSTOM = "custom";

class Item extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onChange = (value) => {
    this.setState({ value });
  };

  handleConfirm = (data) => {
    const { onConfirm } = this.props;
    const { value } = this.state;
    if (this.confirmHook && !this.confirmHook()) return;
    if (data && !data.nativeEvent) {
      onConfirm(data);
      return;
    }
    onConfirm(value);
  };

  setConfirmHook = (hook) => {
    this.confirmHook = hook;
  };

  render() {
    const {
      title,
      message,
      type,
      onCancel,
      textConfirm = "Confirm",
      textCancel = "Cancel",
      confirmButton = (<Button primary>{textConfirm || "Confirm"}</Button>),
      cancelButton = (<Button>{textCancel}</Button>),
      render,
      className,
      actions = [],
    } = this.props;
    const { value } = this.state;
    if (type === DIALOG_CONFIRM) {
      actions.push((
        <div
          className="ui-common-dialog-button-wrapper ui-common-dialog-button-cancel-wrapper"
          onClick={onCancel}>
          {cancelButton}
        </div>
      ));
    }
    if (type !== DIALOG_CUSTOM) {
      actions.push((
        <div
          className="ui-common-dialog-button-wrapper ui-common-dialog-button-confirm-wrapper"
          onClick={this.handleConfirm}>
          {confirmButton}
        </div>
      ));
    }
    return (type === DIALOG_CUSTOM) ? render({ onConfirm: this.handleConfirm, onCancel }) : (
      <Dialog
        className={classes([
          "ui-component ui-common-dialog-item",
          `ui-common-dialog-item-type-${type}`,
          className,
        ])}
        title={title}
        actions={actions}
        onClose={onCancel}>
        {message}
        {render && render({
          value,
          onChange: this.onChange,
          onConfirm: this.handleConfirm,
          onCancel,
          setConfirmHook: this.setConfirmHook,
        })}
      </Dialog>
    );
  }
}

export default Item;
