import { prices } from './data.js';


function showBilling(arrayIndex) {
  let price = (toggle.checked)? (prices[arrayIndex].price * 0.75) : prices[arrayIndex].price;
  pageViews.textContent = prices[arrayIndex].pageviews + ' pageviews';

  billing.textContent = "$ " + price.toFixed(2);
}

function colorChromeSlider(rangeValue) {
  sliderStyle.innerHTML = `#slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #A1F2EA ${rangeValue}%, #F1F5FE ${rangeValue}% 100%);}`;
}

function calcSliderProgress(sliderValue) {
  //returns the progress of the rangeSlider input in % based on range.value
  return (sliderValue * 100 / (rangeSlider['max'] - rangeSlider['min']));
}

let toggle = document.getElementById('subscriptionToggle');
let pageViews = document.querySelector('.first');
let billing = document.getElementById('billing');
let rangeSlider = document.getElementById('slider');
let sliderContainer = document.getElementById('sliderContainer');
let percentage = calcSliderProgress(rangeSlider.value);
let button = document.getElementsByTagName('button')[0];

/*Following statements will be used to update webkit-slider-runnable-track for CHROME and EDGE browsers*/
let sliderStyle = document.createElement('style');
console.log(percentage);
colorChromeSlider(percentage);
sliderContainer.append(sliderStyle);
/**/
showBilling(rangeSlider.value);

rangeSlider.addEventListener('input', function (e) {

  colorChromeSlider(calcSliderProgress(e.target.value));
  showBilling(e.target.value);
})

toggle.addEventListener('change', function (e) {
  showBilling(rangeSlider.value);
})



/*To display a message when user clicks a button*/
button.addEventListener('click', function(e) {
  e.preventDefault();
  let form = button.parentNode;
  let message = document.createElement('h1');
  message.textContent = "Thank you for choosing us!";
  form.innerHTML = '';
  form.appendChild(message);

})
