import { fetchAdvice } from "./model"
import AddAdvice from "./view/advice-view"
import { API_URL } from "./config"

const controlAdvice = function () {
	const url = `${API_URL}/advice`
	const generator = AddAdvice.render.bind(AddAdvice)
	console.log("controller")
	fetchAdvice(url, generator)
}

const init = function () {
	AddAdvice.addHandlerRender(controlAdvice)
}

export default init
