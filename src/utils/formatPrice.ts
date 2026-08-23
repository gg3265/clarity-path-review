export function formatPrice(price: number | string | undefined | null): string {
  if (price === undefined || price === null) return "";
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(numericPrice)) return "";
  
  let s = numericPrice.toString();
  let lastThree = s.substring(s.length - 3);
  let otherNumbers = s.substring(0, s.length - 3);
  if (otherNumbers != '') {
    lastThree = ',' + lastThree;
  }
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return '₹' + res;
}
