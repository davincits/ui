import React from 'react';
import classNames from 'classnames';

import './styles.scss';

function ButtonTextField(props) {
  const {
    floatingLabelText,
    onClick,
    fullWidth,
    hintText,
    name,
    value,
    disabled,
    errorText,
  } = props;
  const className = classNames({
    'button-text-field': true,
    'full-width': fullWidth,
    'with-label': !!floatingLabelText,
    error: errorText,
    filled: value != null,
    disabled,
  });
  return (
    <div onClick={onClick} className={className}>
      <div className="label">{floatingLabelText}</div>
      <button
        className="button"
        name={name}
        disabled={disabled}
      >
        {value || (<span className="hint-text">{hintText}</span>)}
      </button>
      <div className="underline" />
      <div className="underline underline-error" />
      {errorText && <div className="error-text">{errorText}</div>}
    </div>
  );
}

export default ButtonTextField;
