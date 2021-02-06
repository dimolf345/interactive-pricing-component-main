function colorChromeSlider(rangeValue) {
  sliderStyle.innerHTML = `#slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #A1F2EA ${rangeValue}%, #F1F5FE ${rangeValue}% 100%);}`;
}


function calcSliderProgress() {
  //returns the progress of the rangeSlider input in % based on range.value
  return (rangeSlider.value * 100 / (rangeSlider['max'] - rangeSlider['min']));
}

let rangeSlider = document.getElementById('slider');
let sliderContainer = document.getElementById('sliderContainer');
let percentage = calcSliderProgress();
/*Following statement will be used to update webkit-slider-runnable-track for CHROME and EDGE browsers*/
let sliderStyle = document.createElement('style');
colorChromeSlider(percentage);
sliderContainer.append(sliderStyle);


rangeSlider.addEventListener('input', function(e) {
  colorChromeSlider(calcSliderProgress());
})
