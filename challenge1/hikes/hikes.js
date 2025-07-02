function search() {

    let hikeQuery = document.querySelector('#search').value;

    let filteredHikes = hikes.filter(function(hike){
        return ( 
            hike.name.toLowerCase().includes(hikeQuery.toLowerCase()) ||
            hike.description.toLowerCase().includes(hikeQuery.toLowerCase()) || 
            hike.tags.find(tag => tag.toLowerCase().includes(hikeQuery.toLowerCase()))
        );
    })

    console.log(filteredHikes);

    function compareHikes(a,b) {
    if (a.difficulty < b.difficulty) {
        return -1;
    } else if (a.difficulty > b.difficulty) {
        return 1;
    }
    return 0;
    }

    let sortedHikes = filteredHikes.sort(compareHikes);

    console.log(sortedHikes);

    // clear out any previous content
    hikeContainer.innerHTML = '';
    // output onto screen
    sortedHikes.forEach(function(hike){
		renderHike(hike);
	})

}

let hikeContainer = document.querySelector('#hike-container');

let button = document.querySelector('button');

button.addEventListener('click', search);

let randomNum = Math.floor(Math.random() * hikes.length);
console.log(randomNum);

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}

function difficultyTemplate(rating) {
		let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5"
  > Difficulty: `
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-boot"> 🥾</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-empty">▫️</span> `
      }			
    }
    html += `</span>`
    return html
  }

function hikesTemplate(hike) {
    return `<div class="hike-card">
  <div class="hike-content">
    <h2>${hike.name}</h2>
    <div class="hike-tags">
      ${tagTemplate(hike.tags)}
    </div>
    <p>${hike.description}</p>
    <p>${difficultyTemplate(hike.difficulty)}</p>
  </div>
</div>`
}

function renderHike(hike) {
    let html = hikesTemplate(hike);
    hikeContainer.innerHTML += html
}

function init() {
    renderHike(hikes[randomNum]);
}

init();