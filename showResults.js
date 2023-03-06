import jsonData from './data.json' assert {type: 'json'};

document.addEventListener('DOMContentLoaded',() => {
    //Get elements from html
    const averageContainer = document.getElementById('average-result');
    const detailsContainer = document.getElementById('details-container');

    //Get data from json file
    const extractScores = jsonData.map((item) => item.score);
    const scoreSummation = extractScores.reduce((prev, current) => {return (prev + current)},0);
    const averageScore = Math.floor(scoreSummation / extractScores.length);

    //render results, score average
    averageContainer.textContent = averageScore;

    //render summary details 
    jsonData.forEach((object) => {
        detailsContainer.innerHTML +=  `
        <div class="detail-box_item detail-item_${object.category.toLocaleLowerCase()}">
            <div class="detail_attribute">
                <img width="16px" src="${object.icon}" alt="memory">
                <p class="detail-title">${object.category}</p>
            </div>
            <div class="detail_result">
                <p>${object.score}</p><span>/ 100</span>
            </div>
        </div>
    `
    })    
})