const aplication = document.querySelector('.container')
function traer(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(json => console.log(json))
  }
   
  const aplication = document.querySelector('.container')
  function traer(){
      fetch('https://openlibrary.org/developers/api')
      .then(response => response.json())
      .then(json => console.log(json))
    }