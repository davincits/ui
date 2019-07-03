import React, { PureComponent } from 'react';
import IconBroken from 'app/ui/icons/Broken';
import IconArrowRight from 'app/ui/icons/ArrowRight';
import IconArrowLeft from 'app/ui/icons/ArrowLeft';
import Preview from './Preview';

import './styles.scss';

const ESC_CODE = 'Escape';

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      error: false,
    };
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.keyPressHandler);
    window.addEventListener('resize', this.resizeImage);
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.keyPressHandler);
    window.removeEventListener('resize', this.resizeImage);
  }

  resizeImage = () => {
    const { image } = this.refs;
    const container = image.parentElement;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const scale = Math.min(
      containerWidth / imageWidth,
      containerHeight / imageHeight,
    );
    image.style.transform = `translate(-50%, -50%) scale(${scale})`;
    image.style.opacity = 1;
  }

  onLoadError = () => {
    this.setState({ error: true });
  }

  onClose = () => {
    const { onClose } = this.props;
    this.setState({
      current: 0,
      error: false,
    });
    if (onClose) onClose();
  }

  keyPressHandler = ({ code }) => {
    const { onClose } = this.props;
    if (onClose && code === ESC_CODE) {
      onClose();
    }
  }

  setCurrent = (current) => {
    this.setState({ current });
  }

  nextPhoto = () => {
    let { current } = this.state;
    const { images = [] } = this.props;
    current++;
    if (current >= images.length) current = 0;
    this.setState({
      current,
      error: false,
    });
  }

  prevPhoto = () => {
    let { current } = this.state;
    const { images = [] } = this.props;
    if (!current) current = images.length;
    current--;
    this.setState({
      current,
      error: false,
    });
  }

  render() {
    const { current, error } = this.state;
    const { images = [] } = this.props;
    const hasImages = images.length;
    return images.length ? (
      <div className="component-gallery">
        <div className="component-gallery-view">
          {
            (!images[current] || error) ? (<IconBroken />) : (
              <div className="photo-view">
                <img
                  key={current}
                  src={images[current]}
                  onLoad={this.resizeImage}
                  onError={this.onLoadError}
                  ref="image"
                />
              </div>
            )
          }
        </div>
        <div
          className="component-gallery-photos"
          onClick={this.nextPhoto}
        >
          {
            images.map((src, index) => (
              <Preview
                key={index}
                src={src}
                index={index}
                current={current === index}
                onClick={this.setCurrent}
              />
            ))
          }
        </div>
        <div
          className="control control-prev"
          onClick={this.prevPhoto}
        >
          <IconArrowLeft />
        </div>
        <div
          className="control control-next"
          onClick={this.nextPhoto}
        >
          <IconArrowRight />
        </div>
      </div>
    ) : (
      <div className="component-gallery">
        <div className="component-gallery-view">
          <IconBroken />
        </div>
      </div>
    );
  }
}

export default Gallery;
