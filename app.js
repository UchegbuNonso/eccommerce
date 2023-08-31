const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');
const products = [
  {
    id:1,
    title: "Air Force",
    price: "119",
    productDesc: "Most valuable and best shoe in town.",
    colors: [
      {
      code: "black",
      img:"./img/air.png",
      },
      {
      code: "darkblue",
      img:"./img/air2.png",
      }
    ]

  },

  {
    id:2,
    title: "Air Jordan",
    price: "160",
    productDesc: "Very valuable to high travels and occasions.",
    colors: [
      {
      code: "lightgray",
      img:"./img/jordan.png",
      },
      {
      code: "green",
      img:"./img/jordan2.png",
      }
    ]

  },

  {
      id:3,
    title: "Blazer",
    price: "109",
    productDesc: "Anyone with high ecstatic value must love this shoe.",
    colors: [
      {
      code: "lightgray",
      img:"./img/blazer.png",
      },
      {
      code: "green",
      img:"./img/blazer2.png",
      },

    ]


  },

  {

        id:4,
    title: "Crater",
    price: "129",
    productDesc: "Nothing in the world can match to this, best so far.",
    colors: [
      {
      code: "black",
      img:"./img/crater.png",
      },
      {
      code: "lightgray",
      img:"./img/crater2.png",
      }

    ]

  },

  {

        id:5,
    title: "Hippie",
    price: "99",
    productDesc: "Mostly used for special occasions, best in town.",
    colors: [
      {
      code: "gray",
      img:"./img/hippie.png",
      },
      {
      code: "black",
      img:"./img/hippie2.png",
      },


    ],

  },

];

let chosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.Price');
const currentproductDesc  = document.querySelector('.productDesc')
const currentProductcolors = document.querySelectorAll('.color');
const currentProductsizes = document.querySelectorAll('.size');

menuItems.forEach((item, index)=>{
  item.addEventListener("click",()=>{
    // change the current slide
  wrapper.style.transform= `translateX(${-100* index}vw)`;

  // change the chosen product
  chosenProduct = products[index];

  // change title of currrent product
  currentProductTitle.textContent = chosenProduct.title;
  // change price of currrent product
  currentProductPrice.textContent = "$"+chosenProduct.price;
   // change current product description
  currentproductDesc.textContent = chosenProduct.productDesc;
  // change current product colors
  currentProductcolors.forEach((color,index)=>{
    color.style.backgroundColor = chosenProduct.colors[index].code;
  })
  // change current product image
  currentProductImg.src = chosenProduct.colors[0].img;


  })
})

 // Responsive color change of product as you click the colors
currentProductcolors.forEach((color,index)=>{
  color.addEventListener('click',()=>{
    currentProductImg.src = chosenProduct.colors[index].img
  })
})

// change current product sizes

currentProductsizes.forEach((size,index)=>{
  size.addEventListener('click',()=>{
    currentProductsizes.forEach(size=>{
    size.style.backgroundColor = "white";
    size.style.color = "black";
    })
    size.style.backgroundColor = "black";
    size.style.color = "white";
  })
})

// Payment button
const productButton = document.querySelector('.product-btn');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
});
close.addEventListener("click",()=>{
  payment.style.display="none"
});
