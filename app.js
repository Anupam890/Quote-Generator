const input_text = document.getElementById('in_text')
const btn = document.getElementById('search_btn')
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const category = document.getElementById('category')

let get_quote = async() => {
    const url = "https://api.api-ninjas.com/v1/quotes?category=" + input_text.value;
    const api = "ZyjglEay8wtgTQDf8bjY9g==uO4qShoZ4t8k3MHT"

    const response = await fetch(url, {
        headers: {
            'X-Api-Key': api
        }

    }).then(res => res.json()).then(data => {
        quote.innerHTML = data[0].quote
        author.innerHTML = data[0].author
        category.innerHTML = data[0].category
    }).catch(err => console.log(err));
}
window.addEventListener("load", (event) => {
    setTimeout(() => {
        quote.innerHTML = "Welcome to Quotes App" + "<br>" + "created by Anupam" + "💖"
        quote.style.fontSize = "30px"

    }, 1000)

});
btn.addEventListener('click', get_quote);
