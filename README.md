# nj-range-slider

This is a draggable UI slider control to enable the user to select a value from the given range and see the selected value. Apart from it being more visually appealing, it's also more useful compared to the input range control of HTML5 since it also shows value selected by the user in a floating bubble.

## Getting Started

Follow the following steps for using it

### Install the package

```
npm install nj-range-slider
```

### Import NjRangeSlider component in the component where you would like to use

```
import NjRangeSlider from 'nj-range-slider';
```

### Use it in your JSX as seen in the following example.

It required these 5 properties: currentValue, min, max, step & the callback function onSliderValueChange

```
onSliderValueChange(newValue) {
  //alert(newValue);
}

render() {
  return (<NjRangeSlider
    currentValue="25"
    min="5"
    max="100"
    step="5"
    onSliderValueChange={this.onSliderValueChange.bind(this)}/>
  );
}
```
