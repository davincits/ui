import React, { PureComponent } from "react";
import { classes } from "../utils";

class Preview extends PureComponent {
  state = { showed: false };

  handleClick = (event) => {
    event.stopPropagation();
    const { index, onClick } = this.props;
    if (onClick) onClick(index);
  };

  handleLoadEvent = () => {
    this.setState({ showed: true });
  };

  render() {
    const { current, src } = this.props;
    const { showed } = this.state;
    return (
      <div
        className={classes({ image: true, current, showed })}
        style={{ backgroundImage: `url(${src})` }}
        onClick={this.handleClick}>
        <img
          src={src}
          onLoad={this.handleLoadEvent}
          onAbort={this.handleLoadEvent}
          onError={this.handleLoadEvent}
          alt="gallery-preview" />
      </div>
    );
  }
}

export default Preview;
