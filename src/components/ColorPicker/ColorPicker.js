import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title"> Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <span
                className="ColorPicker__option"
                key={label}
                style={{
                  backgroundColor: color,
                  border:
                    index === this.state.activeOptionIdx
                      ? '5px solid black'
                      : 'none',
                }}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
