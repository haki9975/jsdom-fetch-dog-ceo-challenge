console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", function(event){
    imageContainer = document.querySelector("#dog-image-container");
    breedDropdown = document.querySelector("#breed-dropdown");
    breedList = document.querySelector("#dog-breeds");
    fetchDogs()
    fetchBreeds()

   
    breedList.addEventListener("click", function(event){
       event.target.style.color = "red"

   })

});
let fo;
let imageContainer;
let breedDropdown;
let breedList;


function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl).then(resp => resp.json())
        .then(json =>{ 
            json.message.forEach(url => {
                const img = document.createElement("img")
                img.src = url 
                imageContainer.appendChild(img)
            })
        })
}
let experiment;
let obj;
let li;

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl).then(resp => resp.json())
        .then(json =>{
         experiment = json.message
            obj = Object.keys(experiment)
            obj.forEach( breed => {
             li = document.createElement("li")
             li.innerHTML = breed
             li.id = breed
            breedList.appendChild(li)
            })
        })       
}
            
function clickRed(t) {
    t.style.color = "#FF5733"
    //.setAttribute(hex_color, "#FF5733")
}

        
