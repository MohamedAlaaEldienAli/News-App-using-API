

let news ;
let navLink = document.getElementsByClassName("nav-link");
let category = "general";
let country = 'us';
let rowNews = document.querySelector('#newRow');
let dropDowns = document.querySelector(".dropdowns");
let dropDownsMenue = document.querySelector(".dropDownsMenue");
let countryList = document.getElementsByClassName('countryList');
let shearchInp = document.querySelector('#shearchInp');
let term ;





getNews(); 
dropMenw();
changCountry();

shearchInp.addEventListener('keyup' , function(){
  term = shearchInp.value ;
  console.log(term);

  globalSearch();
});

function getNews(){

let req ;

if(window.XMLHttpRequest) // for modern browsers
{

  req = new XMLHttpRequest();
}
else // for IE5 , IE6 browser
{
  req = new ActiveXObject("Microsoft.XMLHTTP");
}

let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7edb31e5f75f410385682730c6d89869`;

req.open("GET" , url );


req.onreadystatechange = function()
{
    if ( req.status == 200 && req.readyState == 4)
    {
        news = JSON.parse( req.response );
        news = news.articles;
        displayNews();
    }
};

req.send();

};


function displayNews(){

let temp = ""; 

for( let i =0 ; i < news.length ; i++)
{
    temp += 

        `<div class="group  text-center   rounded-xl border-2 border-[#1a1b1f] shadow-lg shadow-[#404146] ">
        <div class=" aspect-w-1  overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
          <img src="${news[i].urlToImage}" class="w-full h-full object-cover  group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-lg p-2 text-[#0d81ec]">${news[i].title}</h3>
        <p class="mt-1 text-sm  p-2 font-medium text-[#d9d9e3]">${news[i].description}</p>
      </div>`;

}

newRow.innerHTML = temp;
};


function dropMenw(){
for ( let i =0 ; i < navLink.length ; i++)
{
  navLink[i].addEventListener("click" , function()
  {
    category = navLink[i].innerHTML ;
    getNews();
  });
}

// dropDowns.addEventListener('click' , function(){

//   dropDownsMenue.classList.toggle('hidden');
  

//   // if (dropDownsMenue.classList.contains('flex')  )
//   // {
//   //   dropDownsMenue.classList.add('hidden');
//   //   dropDownsMenue.classList.remove('flex');
//   // }
//   // else if(dropDownsMenue.classList.contains('hidden')){
//   //   dropDownsMenue.classList.add('flex')
//   //   dropDownsMenue.classList.remove('hidden');
//   //}
  
      
  
// }); 

$('.dropdowns').click(function(){
  $('.dropDownsMenue').toggle(500)
});

$('#mobileBtn').click(function(){
  $('.mobileMenu').toggle(500)
 
});


};


function changCountry(){
for (let i =0 ; i < countryList.length ; i ++){

  countryList[i].addEventListener('click' , function(){
    console.log(countryList[i].innerHTML);

    if(countryList[i].innerHTML == 'Egypt'){
      country = 'eg';
      getNews();
    }
    else if(countryList[i].innerHTML == 'SUA'){
      country = 'us';
      getNews();
    }
    else if(countryList[i].innerHTML == 'Ukraine'){
      country = 'ua';
      getNews();
    }
    else if(countryList[i].innerHTML == 'French'){
      country = 'fr';
      getNews();
    }
    
  });
}
};

function globalSearch(){
  let req ;
  

if(window.XMLHttpRequest) // for modern browsers
{

  req = new XMLHttpRequest();
}
else // for IE5 , IE6 browser
{
  req = new ActiveXObject("Microsoft.XMLHTTP");
}

let url = `https://newsapi.org/v2/everything?q=${term}&from=2024-02-23&to=2024-02-23&sortBy=popularity&apiKey=7edb31e5f75f410385682730c6d89869`;

req.open("GET" , url );


req.onreadystatechange = function()
{
    if ( req.status == 200 && req.readyState == 4)
    {
        news = JSON.parse( req.response );
        news = news.articles;
        displayNews();
    }
};

req.send();
};