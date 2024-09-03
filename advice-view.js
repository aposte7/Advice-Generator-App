import icon1 from "/images/pattern-divider-desktop.svg"
import icon2 from "/images/icon-dice.svg"

class AddAdvice {
	_parentElement = document.querySelector("#root")
	_formElement = null // Initialize as null
	_data

	_showError() {}
	_showLoading() {}

	addHandlerRender(handler) {
		window.addEventListener("load", handler)
	}
	_generateMarkup() {
		return ` 
        <div id="advice">
            <h1 class="advice__header">
                    ADVICE <span class="header-number"> #${this._data.id}</span>
            </h1>

            <p class="advice__text">
                ${this._data.advice}
            </p>
            <span class="pause">
                <img src="${icon1}"
                    alt="Description of SVG"/>
            </span>
            <form class="form">
                <button class="btn">
                    <img src="${icon2}" alt="Description of SVG" />
                </button>
            </form>
        </div>
		`
	}

	_clear() {
		this._parentElement.innerHTML = ""
	}

	render(data) {
		console.log("render")
		this._data = data
		const markup = this._generateMarkup()
		this._clear()
		this._parentElement.insertAdjacentHTML("afterbegin", markup)

		// Re-select the form element and add the event listener
	}
}

export default new AddAdvice()
