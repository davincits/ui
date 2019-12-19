import React, { PureComponent } from 'react';
import Option from '../Option';

const HEADER_HEIGHT = 64;
const FOOTER_HEIGHT = 56;

class Options extends PureComponent {
  componentDidMount() {
    const { options } = this.refs;
    let boundings = options.getBoundingClientRect();
    if ((boundings.top + boundings.height) > window.innerHeight) {
      const isOver = boundings.top > window.innerHeight / 2;
      options.parentNode.style.top = isOver ? 'auto' : '100%';
      options.parentNode.style.bottom = isOver ? '100%' : 'auto';
    }
    boundings = options.getBoundingClientRect();
    const top = boundings.top - HEADER_HEIGHT;
    const bottom = window.innerHeight - boundings.top - boundings.height - FOOTER_HEIGHT;
    if (top < 0) {
      options.parentNode.style.maxHeight = `${boundings.height + top}px`;
    } else if (bottom < 0) {
      options.parentNode.style.maxHeight = `${boundings.height + bottom}px`;
    } else {
      options.parentNode.style.maxHeight = '';
    }
    const selected = options.querySelector('.ui-selected');
    if (selected) selected.scrollIntoView({ block: 'center' });
  }

  render() {
    const { value, options, onClick } = this.props;
    return (
      <div className="ui-select-options" ref="options">
        {options.map((props) => (
          <Option
            key={props.value}
            onClick={onClick}
            selected={props.value === value}
            {...props}
          />
        ))}
      </div>
    );
  }
}

export default Options;
