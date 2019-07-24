import React from 'react';
import MaterialTextField from 'material-ui/TextField';
import { colors } from 'app/variables';
import classNames from 'classnames';

const DEFAULT_CLASSNAME = 'text-field-container';
const ERROR_CLASSNAME = 'text-field-with-error';

const floatingLabelShrinkStyle = {
  color: colors.grayTextLight,
};
const underlineDisabledStyle = {
  borderBottom: `1px solid ${colors.underline}`,
};

function TextField({
  className,
  errorText,
  style,
  ...props
}) {
  return (
    <MaterialTextField
      floatingLabelShrinkStyle={floatingLabelShrinkStyle}
      underlineDisabledStyle={underlineDisabledStyle}
      errorText={errorText}
      className={classNames([
        DEFAULT_CLASSNAME,
        errorText && ERROR_CLASSNAME,
        className,
      ])}
      style={{
        width: '100%',
        ...style,
      }}
      {...props}
    />
  );
}

export default TextField;
