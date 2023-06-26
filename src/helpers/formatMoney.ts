export function formatMoney(number: number) {
  const symbol = "$"
  const decimalSeparator = "."
  const thousandsSeparator = ","
  const decimalPlaces = 2
  const formattedNumber = number
    .toFixed(decimalPlaces)
    .replace(/\d(?=(\d{3})+\.)/g, `$&${thousandsSeparator}`);
  return `${symbol}${formattedNumber.replace(".", decimalSeparator)}`;
}
