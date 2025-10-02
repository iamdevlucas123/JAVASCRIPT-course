const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postContainer = document.querySelector("#posts-container");

//Pegar todos os posts

async function getAllPosts(){

    const response = await fetch(url)

    console.log(response)

    const data = response.json()

    console.log(data)

    loadingElement.classList.add('hide')
}

data.map((post) => {
    const div = document.createElement("div")
    const title = document.createElement("h2")
    const body = document.createElement("p")
    const link = document.createElement("a")

    title.innerHTML = post.title;
    body.innerHTML = post.body;
    link.innerText = "Ler"
    link.setAttribute("href", `/07-function/exercicio/post.html`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)

    postContainer.appendChild(div)
})

getAllPosts()