//Vjezbanje drugacijeg nacina pristupanja podacima, koji se malo razlikuje nego u app.js

const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.about');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    

    const template = `
    <div class="about">

     <div class="heading">
       <div class="job-logo" style="background: url(${post.logo}) no-repeat center; background-color: ${post.logoBackground};"></div>

       <div class="heading-context">

       <div class="company-info">
         <h2>${post.company}</h2>
         <p>${post.company}.com</p>
       </div>
    
       <div class="btn-primary">
         <button class="btn1">Company Site</button> 
       </div>

     </div>
    
    </div>

    <div class="context">
    
      <div class="job-top">
        <div class="job-info">

          <p>1w ago • Part Time</p>
          <h2> ${post.position} </h2>
          <small> ${post.location} </small>

        </div>

        <div class="btn-secondary">
          <button class="btn2"> Apply Now </button>
        </div>
    
    </div>

    <div class="job-context">
    
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora cumque consectetur modi nam? Aspernatur veniam officiis itaque vel odit, minus rerum exercitationem laboriosam facilis vero maiores quisquam consequuntur pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore magni reprehenderit accusamus. Nostrum iusto voluptatum dolor itaque perspiciatis? Officia saepe magni necessitatibus reiciendis similique voluptas nemo natus sit sapiente? Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

     <h3> Requirements </h3>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis ut maxime optio unde dicta nulla maiores quos dolorum sapiente consequuntur eos id aspernatur debitis quae, iure odit, deserunt a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum officiis asperiores, necessitatibus esse laboriosam ab perferendis quaerat rem enim hic harum magni voluptas est provident. </p>

    <ul>
      <li> Morbi interdum mollis sapien. Sed</li>
      <li> Phasellus lancinia magna a ullamcorper loareet, lectus arcu pulvinar risus </li>
      <li> Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse accurna, Etiam pellentesque mauris ut lectus </li>
      <li> Morbi interdum mollis sapien. Sed </li> 
    </ul>

    <h3> What You Will Do </h3>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis ut maxime optio unde dicta nulla maiores quos dolorum sapiente consequuntur eos id aspernatur debitis quae, iure odit, deserunt a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum officiis asperiores, necessitatibus esse laboriosam ab perferendis quaerat rem enim hic harum magni voluptas est provident. </p>

    <ol>
      <li> Morbi interdum mollis sapien. Sed</li>
      <li> Phasellus lancinia magna a ullamcorper loareet, lectus arcu pulvinar risus </li>
      <li> Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse accurna, Etiam pellentesque mauris ut lectus </li>
      <li> Morbi interdum mollis sapien. Sed </li> 
    </ol>


        </div> 

      </div>

    </div>
    `

    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());


//---------------Dark mode---------------------

const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

//-------------Move to index.html----------------

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.location.href = 'index.html';
});