let div=document.createElement("div")
div.setAttribute("class","container")
document.body.append(div);
let heading=document.createElement("H1")
heading.textContent="Nintendo characters";
heading.setAttribute("class","text-center")
heading.setAttribute("id","title")
div.append(heading)
//row div
let row=document.createElement("div");
row.setAttribute("class","row text-center");
div.append(row);


let displayed=async ()=>{
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const data = await response.json();
  
    
    
    data.amiibo.slice(0, 200).forEach(element => {
        let newDiv = document.createElement('div');
      newDiv.classList.add('col-lg-4');
      newDiv.innerHTML = `
        <div class="card" style="width: 18rem">
          <h5 class="card-header">${element.character}</h5>
          <img src="${element.image}" class="card-img-top" alt="image" />
          <div class="card-body">
            <p class="card-text">amiiboSeries: ${element.amiiboSeries}</p>
            <p class="card-text">GameSeries: ${element.gameSeries}</p>
          </div>
        </div>
      `;
      row.appendChild(newDiv);
    });
    

}
displayed();