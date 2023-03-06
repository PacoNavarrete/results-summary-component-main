## Hi, Welcome! 👋

# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Solution Links](#solution-links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Applied knowleged](#applied-knowleged)
    - [Using the .json file as endpoint](#using-the-json-file-as-endpoint)
    - [Using the map() method for extract the scores.](#using-the-map-method-for-extract-the-scores)
    - [Using the reduce() method to calculate the sum of the individual scores.](#using-the-reduce-method-to-calculate-the-sum-of-the-individual-scores)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Build out a results summary component and get it looking as close to this design as possible:

Desktop view<br/>
<img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1676651421/Challenges/xals0mqfmph6kcspsezk.jpg" alt= “Desktop-view” width="380px" height="auto">
<br/>
Mobile view<br/>
<img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1676651421/Challenges/np8gcjsljpn4zlzqdusd.jpg" alt= “Mobile-view” width="150px" height="auto">

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. We provide the data for the results in a local data.json file. 
So you can use that to add the results and total score dynamically if you choose.

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Solution Links

✨Solution hosted by github pages ✨

- Live Site URL: [Go to see it ➡](https://paconavarrete.github.io/results-summary-component-main/){:target="_blank"}

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript, functional parign programming.
- Json
- git
- github

### Applied knowleged

### Using the .json file as endpoint

Importing .json data into javascript module it's helpfull, in the case that the "custumer" 
gave us a .json file with important data, in this case each category and scores, we can use it as an endpoint.

How use it in this challange:
```js
import jsonData from './data.json' assert {type: 'json'};
```

### Using the map() method for extract the scores.
map() is an useful method of the functional paradign programming in Javascript so it's easy to collect values of an iterable and return with a new array of the collected values.

How use it in this challange:
```js
const extractScores = jsonData.map((item) => item.score);
```

### Using the reduce() method to calculate the sum of the individual scores.
reduce()  is also an useful method of the functional paradign, it help us to transform an array into
any value, it will be a number, string, an object, a boolean or an function, but in this case we can
use it to reduce an array to the total sum of the scores and return that number.

How use it in this challange:
```js
const scoreSummation = extractScores.reduce((prev, current) => {return (prev + current)},0);
```

### Useful resources
If you want to solve challenges like this you can visit the Front end mentor site:
- [Go visit ➡](https://www.frontendmentor.io){:target="_blank"}


## Author

- Website - [Paco Navarrete](https://github.com/PacoNavarrete){:target="_blank"}
- Frontend Mentor - [@PacoNavarrete](https://www.frontendmentor.io/profile/PacoNavarrete){:target="_blank"}
- LinkedIn - [@FranciscoCN](https://www.linkedin.com/in/francisco-cienfuegos-navarrete-291619164/){:target="_blank"}


## Acknowledgments

tThanks for visit this repo, never stop learning!
