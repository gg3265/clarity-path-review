//#region node_modules/.nitro/vite/services/ssr/assets/formatPrice-DmNd5paV.js
function formatPrice(price) {
	if (price === void 0 || price === null) return "";
	const numericPrice = typeof price === "string" ? parseFloat(price) : price;
	if (isNaN(numericPrice)) return "";
	let s = numericPrice.toString();
	let lastThree = s.substring(s.length - 3);
	let otherNumbers = s.substring(0, s.length - 3);
	if (otherNumbers != "") lastThree = "," + lastThree;
	return "₹" + (otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree);
}
//#endregion
export { formatPrice as t };
