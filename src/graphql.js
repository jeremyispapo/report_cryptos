import fetch from "node-fetch"
const API = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"

function fetchData(urlApi) {
	return fetch(urlApi)
}

async function getCrypto() {
	const data = await fetchData(API)
	const data2 = await data

	console.log(data2)
}

getCrypto()