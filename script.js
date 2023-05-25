
let carouselImg=[
    
   './images/mediamodifier-PKdcZz-o6bw-unsplash.jpg',
   './images/seven-shooter-ZzE9uKOAchc-unsplash.jpg',
   './images/bastien-jaillot-eJwSOguD1rE-unsplash.jpg',
   './images/jelleke-vanooteghem-bNUGJD3gO94-unsplash.jpg'
];
let carouselClass=document.getElementsByClassName('carousel')
let [carousel]=carouselClass;
i=0;
function nextImg(){
  let img=document.getElementById('img')
 //console.log(carouselImg[i]);
 img.src=carouselImg[i]
 i=++i % carouselImg.length;
img.src=carouselImg[i];

}
//console.log(0%3)
setInterval(nextImg,5000)

let [a,b,c,d,e,f]=document.getElementsByClassName('categoryflex');
a.addEventListener('click',(e)=>{
    console.log('clicked')
})
