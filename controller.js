import { fetchAdvice } from "./model"
import AddAdvice from "./advice-view"
import { API_URL } from "./config"

const controlAdvice = async function () {
	const url = `${API_URL}/advice`
	const generator = AddAdvice.render.bind(AddAdvice)

	await fetchAdvice(url, (data, id) => {
		generator(data)
		updateURLWithAdviceId(id)
	})
}

function updateURLWithAdviceId(id) {
	const url = new URL(window.location)
	url.searchParams.set("advice", id)
	window.history.pushState({ path: url.href }, "", url.href)
}

const init = function () {
	console.log("init")
	AddAdvice.addHandlerRender(controlAdvice)
}

init()
