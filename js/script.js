//select section
let section = document.querySelector("section");

//declare api url
let url = "https://newsapi.org/v2/everything?q=apple&apiKey=a8c5fb917bbc49e7a4bce9555d8ab1fa";

//fetch data from api
fetch(url)
    //parse response to json
    .then(response => {return response.json()})
    //handle data
    .then(data => {
        console.log(data);
        displayData(data.articles);
    })
    //handle errors
    .catch(error => {
        console.error("Error:", error);
    });

// function to display data
function displayData(data) {
    // loop through data
    data.forEach(article => {
        // create date object
        let date = new Date(article.publishedAt);
        // create elements
        let div = document.createElement("div");
        // inject elements
        div.innerHTML = `
            <a target="_blank" href="${article.url}"><img src="${article.urlToImage}"></a>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <div>
                <p>${article.author}</p>
                <p>${date.toISOString().slice(0, 10) + " " + date.toISOString().slice(11, 16)}</p>
            </div>
            <div>
                <a target="_blank" href="${article.url}">READ MORE</a>
            </div>
        `;
        
        // append elements
        section.appendChild(div);
    })
}