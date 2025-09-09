
// card container 
const allplanets =()=> {
  toggleSpinner(true); 
  fetch('https://openapi.programming-hero.com/api/plants')
  .then(res=>res.json())
  .then(datas=>{
     cards(datas.plants); 
     toggleSpinner(false);
  })
  
  
}



const cards = (plants) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';


  for (let plant of plants) {
    cardContainer.innerHTML += `
      <div class="card bg-white p-5 rounded-[8px] flex flex-col justify-between h-full" data-id="${plant.id}">
        <div>
          <img class="w-full h-48 object-cover rounded" src="${plant.image}" alt="${plant.name}" />
          <h1 class="card-detail font-semibold cursor-pointer  mt-3">${plant.name}</h1>
          <p class="text-gray-600 mt-1">${plant.description ? plant.description : 'No description available.'}</p>
        </div>
        <div class="mt-4">
          <div class="flex justify-between items-center">
            <h1 class="text-[#15806A] bg-[#DCFCE7] text-center py-2 px-4 rounded-full">${plant.category}</h1>
            <h1 class="font-semibold price-btn"><span>৳</span>${plant.price}</h1>
          </div>
          <button class="btn btn-wide bg-[#15803d] text-white border-none rounded-full mt-3 w-full">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }
  
}

// spinner 

const toggleSpinner = (status) => {
  
  if(status==true) {
   document.getElementById('spinner').classList.remove('hidden');
   document.getElementById('card-container').classList.add('hidden');
  } else {
    document.getElementById('card-container').classList.remove('hidden');
   document.getElementById('spinner').classList.add('hidden');
  }
};


// modal 
document.getElementById('card-container').addEventListener('click', function(e){
  if(e.target.classList.contains('card-detail')){  
    const plantId = e.target.closest('.card').getAttribute('data-id');

    fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`)
      .then(res => res.json())
      .then(data => {
        const plant = data.plants;
        document.getElementById('modal-image').src = plant.image;
        document.getElementById('modal-name').innerText = plant.name;
        document.getElementById('modal-description').innerText = plant.description;
        document.getElementById('modal-category').innerText = plant.category;
        document.getElementById('modal-price-value').innerText = plant.price;

        // ✅ DaisyUI modal open
        document.getElementById('my_modal_5').showModal();
      });
  }
});

// modal 




allplanets();


// categories 
const allbuttons = ()=>{
  toggleSpinner(true);
  fetch('https://openapi.programming-hero.com/api/categories')
  .then(res=>res.json())
  .then(button=>buttons(button.categories))
}


const buttons =(allCategories)=>{
   const container = document.getElementById('category-container');
  for(let button of allCategories){
     container.innerHTML += `
      <button 
      class="btn category-btn text-[#1f2937] px-5 py-2 w-full hover:bg-[#15803D] hover:text-white" 
      data-id="${button.id}"> 
      ${button.category_name}
    </button>
  `;
  }
  toggleSpinner(false);
}

// active button 

const container = document.getElementById('category-container');

container.addEventListener('click', function (e) {
  toggleSpinner(true);
  if (e.target.classList.contains('category-btn')) {
  
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    const categoryId = e.target.getAttribute('data-id');

    if(categoryId === "all"){
      allplanets(); 
    }else{
      fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
      .then(res => res.json())
      .then(data => {
        cards(data.plants);
       toggleSpinner(false); 
      });
     
    }
  }
  
});




allbuttons();



// your cart 
let cart = [];


document.getElementById('card-container').addEventListener('click', function(e){
  if(e.target.innerText.includes("Add to Cart")){
    const card = e.target.closest('.card');
    const plantName = card.querySelector('.card-detail').innerText;
    const plantPriceText = card.querySelector('.price-btn').innerText;
const plantPrice = parseInt(plantPriceText.replace('৳','')) || 0;

    const alertToAdd = confirm(`${plantName} has been added to your cart.`);
    
    if(alertToAdd){
      cart.push({ name: plantName, price: plantPrice }); 
      updateCart(); 
    }
    
  }
});

function updateCart(){
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = ''; 

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="flex justify-between items-center px-3 py-2 bg-[#F0FDF4] rounded-[8px]">
        <div>
          <h1 class="mb-1">${item.name}</h1>
          <p class="text-[#8C8C8C]">৳${item.price ? item.price : 0} x 1</p>

        </div>
        <div>
          <button onclick="removeCartItem(${index})"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    `;
  });

  document.getElementById('cart-total').innerText = total;
}


function removeCartItem(index){
  cart.splice(index, 1); 
  updateCart(); 
}


















