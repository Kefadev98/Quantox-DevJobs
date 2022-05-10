const container = document.querySelector('.cards');

//-------------Filtering Full-time Jobs-------------------------

const fulltimeBar = document.querySelector('#full-time');
let timeSearch = [];

fulltimeBar.addEventListener('change', (e) => {

    console.log(fulltimeBar);
    const timeString = e.target.value;
    const filteredTime = timeSearch.filter(time => {
        if(fulltimeBar.checked) {
            return time.contract.includes("Full Time")
        }
        else {
            return time;
        }
    });
    console.log(filteredTime);
    displayCompanies(filteredTime);
});

const loadTime = async () => {
    try {
        const tim = await fetch ('http://localhost:3000/posts');
        timeSearch = await tim.json();
        displayCompanies(timeSearch);
        console.log(timeSearch);
    }
    catch (err) {
        console.log(err);
    }
};


//-------------Filtering data from location bar-----------------

const locationBar = document.getElementById('location');
let locationSearch = [];

console.log(locationBar);
locationBar.addEventListener('keyup', (e) => {
    const locationString = e.target.value;
    const filteredLocations = locationSearch.filter(company => {
       return company.location.includes(locationString);
    });
    displayCompanies(filteredLocations);
});

const loadLocations = async () => {
    try {
        const res = await fetch('http://localhost:3000/posts');
        locationSearch = await res.json();
        displayCompanies(locationSearch);
        console.log(locationSearch);
    }
    catch (err) {
        console.log(err);
    }
};

//--------------Filtering data from search bar------------------

const searchBar = document.getElementById('search');
let nameSearch = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredName = nameSearch.filter(name => {
        return name.company.toLowerCase().includes(searchString);
    });
    displayCompanies(filteredName);
});

const loadCompanyNames = async () => {
    try {
        const uri = await fetch('http://localhost:3000/posts');
        nameSearch = await uri.json();
        displayCompanies(nameSearch);
        console.log(nameSearch);
    }
    catch (err) {
        console.log(err);
    }
};

//------------Data from JSON file-----------------

const displayCompanies = (posts) => {
    const template = posts
         .map((post) => {
             return `
             <div class="card">

              <div class="job-logo" style="background: url(${post.logo}) no-repeat center; background-color: ${post.logoBackground};"></div>
              <p>${post.postedAt} • ${post.contract}</p>
              <a href = "about.html?id=${post.id}"><h4>${post.position}</h4></a>
              <p>${post.company}</p>
              <small>${post.location}</small>
   
             </div>
             `;
         })
         .join('');
         container.innerHTML = template;
}
loadLocations();
loadCompanyNames();
loadTime();


//--------------POP UP----------------------

const filter = document.querySelector('.filter-button');
const modal = document.querySelector('.modal');
const backColor = document.querySelector('.back-color');
const shader = document.querySelector('.shader');

filter.addEventListener('click', () => {
    modal.classList.toggle('modal-visibility');
    shader.classList.toggle('shader-visibility');
});

shader.addEventListener('click', () => {
    modal.classList.toggle('modal-visibility');
    shader.classList.toggle('shader-visibility');
});


//----------------SWITCH THEME-----------------

const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});