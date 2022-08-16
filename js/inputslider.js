export const sliderCost = document.getElementById('slider-cost');

noUiSlider.create(sliderCost, {
    start: 12000000,
    connect: 'lower',
    step: 100000,
    tooltips: true,
    range: {
        'min': 0,
        '50%': [10000000,1],
        'max': 100000000
    }
});