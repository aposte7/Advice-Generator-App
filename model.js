export const state = {
	advice: {},
	loading: false,
	error: null, // Changed to null for more accurate error state
}

function createAdviceObject(data) {
	const { slip } = data
	return {
		id: slip.id,
		advice: slip.advice,
	}
}

export const fetchAdvice = async function (
	url,
	successCallback = (data) => {}, // Default no-op callback
	handleError = (error) => {} // Default no-op callback
) {
	state.loading = true
	console.log("Fetching advice from", url) // Log URL being fetched
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = await response.json()
		state.advice = createAdviceObject(data)

		successCallback(state.advice, state.advice.id)
	} catch (error) {
		console.error("Error occurred:", error) // Log detailed error message
		state.error = error.message
		handleError(error)
	} finally {
		state.loading = false
		if (state.error) state.error = null
	}
}
