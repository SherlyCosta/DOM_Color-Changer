const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const images=document.querySelectorAll('.rangers');

/*images is a NodeList (collection of all .rangers images), so you can't directly do images.style.display='block'. Instead, you need to:
1. Hide all images first
2. Show only the image that matches the clicked button's ID
*/

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    h1.style.color = 'white';
    h3.style.color = 'white';
    console.log(e.target.id);

    //1. First, hide all images
    images.forEach((img)=>{
      img.style.display='none'
    })

    //2. show the images that matches the clicked button's ID
    images.forEach((img)=>{
      if(img.alt.includes(e.target.id)){//to check if images alt has/includes ("red") clicked buttons id as ("red") so if it matches then display the image. 
        img.style.display='block'
      }
    })


    if (e.target.id === 'red') {
      // console.log('blue color');
      // body.style.backgroundColor = 'blue';
      // body.style.backgroundColor = e.target.id;
      body.style.backgroundColor = '#ee0707';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = '#3410f1';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = '#dfae15';
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = '#0f9668';
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = '#d43ca0';
    }
  });
});
