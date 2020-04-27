import React from "react";
import './nj-range-slider.css';

class NjRangeSlider extends React.Component {
  constructor(props) {
    super(props);
    const { currentValue } = this.props;
    this.state = {
      newValue: currentValue,
      selectedInputPosition: this.getSelectedOutputPosition(currentValue)
    }
  }

  getSelectedOutputPosition(selectedValue) {
    const { min, max } = this.props;
    return Number(((selectedValue - min) * 100) / (max - min));
  }

  onSliderInput(e) {
    const newValue = e.target.value;
    this.setState({
      newValue,
      selectedInputPosition: this.getSelectedOutputPosition(newValue)
    });
    this.props.onSliderValueChange(newValue);
  }

  render() {
    const { currentValue, min, max, step } = this.props;
    const { selectedInputPosition } = this.state;
    const divStyle = {
      left: selectedInputPosition - (selectedInputPosition * 0.095) + '%'
    };
    return (
      <div className="slider-container">
        <input
          type="range"
          name="percentage"
          min={min}
          max={max}
          step={step}
          defaultValue={currentValue}
          onInput={this.onSliderInput.bind(this)}
          className="slider"/>
        <div className="slider-output" style={divStyle}>
          { this.state.newValue }
        </div>
      </div>);
  }
}

export default NjRangeSlider;
