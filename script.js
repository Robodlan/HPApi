
let character
let postArray = []
let postForm = document.getElementById('post')
let nameInput = document.getElementById('name')

function renderPost() {
    let html = ""
    for (post of postArray) {
        html += 
        `   
            <div class="card grid-item">
            <img class="image" src="${post.image}">
                <div class="card-info">
                    <h2 class="name grid-item1">${post.name}</h2>
                    <p class="house grid-item2">House: ${post.house}</p>
                    <p class="birth grid-item3">Birth: ${post.dateOfBirth}</p>
                    <p class="ancestry grid-item4">Ancestry: ${post.ancestry}</p> 
                    <p class="patro grid-item6">Patronus: ${post.patronus}</p>
                    <p class="actor grid-item5">Actor: ${post.actor}</p>
                </div>
            </div>
        `
    }
    document.getElementById('container').innerHTML = html
}

function students() {
    fetch("https://hp-api.onrender.com/api/characters")
        .then(res => res.json())
        .then(data => {
            postArray = data.slice(0, 23)
            console.log(postArray)
            renderPost()
        })
    }
    students()

    // http://hp-api.herokuapp.com/api/characters

   
    
    
    







