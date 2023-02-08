# Animated JavaScript Browser Clock

I've had this idea for a design for a while: make a functional 'analog' clock with HTML, CSS, and JavaScript. The idea is simple, it's just a clock that tells the time (and will tell local time for wherever you're located). However I wanted to add what I quickly realized was going to be a difficult animation. I wanted segmented circles to be rotating in a concentric pattern around the clock. This took some digging.

I eventually found a generator developed by [Håken Lid](https://observablehq.com/@haakenlid) that will generate segmented circles of custom sizes and provide an SVG download. Using this, I was able to generate my design.

The real difficulty was centering everything on page with CSS. I managed to place all components within a single div which was centered using the body as a grid container. All elements were then positioned as absolute and origins set at center.

The JavaScript then gets the local date-time and sets the initial clock position, then the browser takes over and increments each rotating elements rotation every second. I used CSS to smooth the animations and to simulated the second hands mechanical motion using a cubic-bezier.

This project may not be much, but it's a good thing to put on the monitor instead of a screen-saver.

## Installation

Simply download the files and open 'index.html' in your preferred browser.

## Contributing

As this project is a demonstration of my knowledge and use of front-end languages, I will not be accepting pull requests. Any feedback is absolutely welcome.

I am providing this code as unlicensed material, however if you choose to use any features of this project I would only ask for credit in your project.

## License

[The Unlicense](https://choosealicense.com/licenses/unlicense/)