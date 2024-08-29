class AddAdvice {
	_parentElement = document.querySelector("#root")
	_cardElement = document.querySelector("#advice")
	_adviceId = document.querySelector(".header-number")
	_adviceText = document.querySelector(".advice__text")
	_data

	_showError() {}
	_showLoading() {}

	addHandlerRender(handler) {
		console.log("handler added")
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
                <img src="/images/pattern-divider-desktop.svg"
                    alt="Description of SVG"/>
            </span>
               
            <button class="btn">
                <img src="/images/icon-dice.svg" alt="Description of SVG" />
            </button>
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
	}
}

export default new AddAdvice()
