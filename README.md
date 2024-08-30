# Advice Generator App

The challenge is to build advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

## Table of Contents

-   [Overview](#overview)
    -   [The Challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My Process](#my-process)
    -   [Built With](#built-with)
    -   [What I Learned](#what-i-learned)
-   [Author](#author)

## Overview

### The Challenge

Your challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size.
-   See hover states for all interactive elements on the page.
-   Generate a new piece of advice by clicking the dice icon.

### Screenshot

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)
![Design preview for the Advice generator app coding challenge](./design/mobile-design.jpg)

### Links

-   [ Live Site](https://aposte7.github.io/advice-generator.git)

## My Process

### Built With

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [Vite](https://vitejs.dev/) - Frontend Tooling
-   JavaScript (ES6+)
-   MVC (Model-View-Controller) pattern
-   Advice Slip API integration

### What I Learned

This project reinforced my understanding of the MVC pattern and API integration. By using Vite, I gained experience with modern frontend tooling and workflow. Implementing responsive design with Flexbox allowed me to ensure the app looks great on all screen sizes.

Here’s a snippet of the JavaScript code that handles the API integration:

```js
export const fetchAdvice = async function (
	url,
	successCallback = (data) => {},
	handleError = (error) => {}
) {
	state.loading = true // Log URL being fetched
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = await response.json()
		state.advice = createAdviceObject(data)

		successCallback(state.advice, state.advice.id)
	} catch (error) {
		state.error = error.message
		handleError(error)
	} finally {
		state.loading = false
		if (state.error) state.error = null
	}
}
```

# Author

[@aposte7](https://www.frontendmentor.io/profile/aposte7)
