// 4.752% форматер чисел 
export const persentFormatter = new Intl.NumberFormat('ru-Ru', {
    style: 'percent',
    maximumFractionDigits: 3,
});


// euro
export const priceFormatter = new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
});


// euro
export const priceFormatterDecimals = new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2
});