import fetch from "node-fetch";
const API = "https://api.pancakeswap.info/api/v2/pairs";

function fetchData(urlApi) {
	return fetch(urlApi);
}


async function getCrytoName() {
	const data = await fetchData(API)
	const json = await data.json()
	const cryto = (json.data)
	// console.log(cryto)
	return cryto
}


let oldPriceCrytos = [1];
setInterval(async() => {
	let time = new Date()
	let hours = time.getHours()
	let minutes = time.getMinutes()
	let seconds = time.getSeconds()

	const actualPriceCryto = Object.values(await getCrytoName()).map(({
		base_symbol,
		quote_symbol,
		price
	}) =>{
		return {
			base_symbol,
			quote_symbol,
			price,
			update: `${hours}:${minutes}:${seconds}`
		}
	})
	
	
	let isEqualPrice = actualPriceCryto.every((item, i) => {
		return item.price === oldPriceCrytos[i].price
	})
	if(!isEqualPrice) {
		oldPriceCrytos = [...actualPriceCryto]
		console.table(oldPriceCrytos)
	}
}, 5000)
