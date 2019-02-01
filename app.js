// THE SPACE FOR THE LARGE IMAGE
let current = document.querySelector('#current');

// WITHOUT LOOP (THE LONG WAY)
// const img1 = document.getElementById('img1');
// const img2 = document.getElementById('img2');
// const img3 = document.getElementById('img3');
// const img4 = document.getElementById('img4');
// const img5 = document.getElementById('img5');
// const img6 = document.getElementById('img6');
// const img7 = document.getElementById('img7');
// const img8 = document.getElementById('img8');

// img1.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img2.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img3.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img4.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img5.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img6.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img7.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// img8.addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// const allImgs = [img1, img2, img3, img4, img5, img6, img7, img8];

// allImgs[0].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[1].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[2].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[3].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[4].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[5].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

// allImgs[6].addEventListener('click',function(event){
//   current.src = event.target.src;
// });
// allImgs[7].addEventListener('click',function(event){
//   current.src = event.target.src;
// });

const imgs =document.querySelectorAll('.imgs img');

const placeName = document.getElementById('placeName');

for(let counter = 0; counter <= 7; counter = counter +1 ){
  imgs[counter].addEventListener('click', function(event){
    current.src = event.target.src;
    placeName.innerHTML = event.target.alt;
  });
}
