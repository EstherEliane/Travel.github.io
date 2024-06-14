let images = [
  'https://assets.telegraphindia.com/telegraph/2023/Aug/1692446720_shutterstock_1187245654.jpg',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539020490.jpg?k=e41571ab65677b8b9d188710224941e7dec5e3240d17c1a7677e6a0f49c3787e&o=&hp=1',
  'https://static.wanderon.in/wp-content/uploads/2024/03/feature-image-for-14-most-beautiful-photography-spots-in-chandigarh.jpg',
  'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/97000/97959-Rock-Garden.jpg',
  'https://www.fabhotels.com/blog/wp-content/uploads/2018/07/feature_image_600x400-3.jpg'
]

let bigImage = document.getElementById('bigimage')
let flexbox = document.getElementById('flexboz')

images. forEach( function (url){
let div = document. createElement( 'div');
div.classList.add( 'flexitem');
let img = document. createElement( 'img');
img. src = url;
img. addEventListener( 'click' ,function(){
bigImage.src = url;
｝）
div. appendChild (img);
flexbox. appendChild(div);
})
