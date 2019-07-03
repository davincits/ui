import React, { PureComponent } from 'react';
import { classes } from 'app/utils/common';

class Preview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showed: false };
  }

  clickHandler = (event) => {
    event.stopPropagation();
    const { index, onClick } = this.props;
    if (onClick) onClick(index);
  }

  loadHandler = () => {
    this.setState({ showed: true });
  }

  render() {
    const { current, src } = this.props;
    const { showed } = this.state;
    return (
      <div
        className={classes({ image: true, current, showed })}
        style={{ backgroundImage: `url(${src})` }}
        onClick={this.clickHandler}
      >
        <img
          src={src}
          onLoad={this.loadHandler}
          onAbort={this.loadHandler}
          onError={this.loadHandler}
        />
      </div>
    );
  }
}

export default Preview;
