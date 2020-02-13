console.log('app.js connected')


const left_brand_select = document.getElementById('left-brand-select')
const left_product_select = document.getElementById('left-product-select')
const left_brand_span = document.getElementById('left-brand-span')
const left_name_span = document.getElementById('left-name-span')
const left_price_span = document.getElementById('left-price-span')
const left_img = document.getElementById('left-img')

const right_brand_select = document.getElementById('right-brand-select')
const right_product_select = document.getElementById('right-product-select')
const right_brand_span = document.getElementById('right-brand-span')
const right_name_span = document.getElementById('right-name-span')
const right_price_span = document.getElementById('right-price-span')
const right_img = document.getElementById('right-img')


let left_selected_brand_index = left_brand_select.value;
let left_selected_product_index = left_product_select.value;
let right_selected_brand_index = right_brand_select.value;
let right_selected_product_index = right_product_select.value;


let brandsJSON = [
    {
        name:'nokia',
        products:[{
            name:'nokia 3310', price:'1000', img_path:'./imgs/nokia-3310.jpg'
        }, {
            name:'nokia 1120', price: '2000', img_path:'./imgs/nokia-1112.jpg'
        }]
    },
    {
        name:'lg',
        products:[{
            name:'lg nexus 5', price:'16000', img_path:'./imgs/lg-nexus-5.png'
        }, {
            name:'lg g4 stylus', price: '25000', img_path:'./imgs/lg-g4-stylus.png'
        }]
    }
]


// BRAND SELECTOR
left_brand_select.addEventListener('change', () => {
    left_selected_brand_index = left_brand_select.value;
    left_product_select.innerHTML = generateOptions(left_selected_brand_index)

})
right_brand_select.addEventListener('change', () => {
    right_selected_brand_index = right_brand_select.value;
    right_product_select.innerHTML = generateOptions(right_selected_brand_index)
})

// PRODUCT SELECTOR
left_product_select.addEventListener('change', () => {
    
    updateIndicies()

    let left_product_name = brandsJSON[left_selected_brand_index].products[left_selected_product_index].name
    if(right_selected_brand_index && right_selected_product_index){
        let right_product_name = brandsJSON[right_selected_brand_index].products[right_selected_product_index].name
        if(left_product_name == right_product_name){
            alert('cant compare similar products')
            return
        }
    }
    left_selected_product_index = left_product_select.value;
    leftInfoUpdate(left_selected_product_index)
})
right_product_select.addEventListener('change', () => {
    updateIndicies()
    
    let right_product_name = brandsJSON[right_selected_brand_index].products[right_selected_product_index].name
    if(left_selected_brand_index && left_selected_product_index){
        let left_product_name = brandsJSON[left_selected_brand_index].products[left_selected_product_index].name
        if(left_product_name == right_product_name){
            alert('cant compare similar products')
            return
        }
    }

    rightInfoUpdate(right_selected_product_index)
})

// Update Indicies
function updateIndicies(){
    left_selected_brand_index = left_brand_select.value;
    left_selected_product_index = left_product_select.value;
    right_selected_brand_index = right_brand_select.value;
    right_selected_product_index = right_product_select.value;
}

// function to generete options html
function generateOptions(index){
    let gen_html = '<option>Select</option>'
    let selected_brand = brandsJSON[index];
    console.log(selected_brand)
    for(let i = 0; i<selected_brand.products.length; i++){
        gen_html += `<option value="${i}">${selected_brand.products[i].name}</option>`
    }
    return gen_html
}

// Update Left Panel's Info
function leftInfoUpdate(index){
    left_img.src = leftUpdateImg(index)
    left_brand_span.innerHTML = leftUpdateBrand()
    left_name_span.innerHTML = leftUpdateName(index)
    left_price_span.innerHTML = leftUpdatePrice(index)
}

// Update Right Panel's Info
function rightInfoUpdate(index){
    right_img.src = rightUpdateImg(index)
    right_brand_span.innerHTML = rightUpdateBrand()
    right_name_span.innerHTML = rightUpdateName(index)
    right_price_span.innerHTML = rightUpdatePrice(index)
}




// ============= HELPER FUNCTIONS =============
function leftUpdateImg(index){
    let selected_brand_index = left_brand_select.value;
    let img = brandsJSON[selected_brand_index].products[index].img_path
    return img
}

function leftUpdatePrice(index){
    let selected_brand_index = left_brand_select.value;
    let price = brandsJSON[selected_brand_index].products[index].price;
    return price;
}

function leftUpdateBrand(){
    let selected_brand_index = left_brand_select.value;
    let name = brandsJSON[selected_brand_index].name;
    return name;
}

function leftUpdateName(index){
    let selected_brand_index = left_brand_select.value;
    let name = brandsJSON[selected_brand_index].products[index].name;
    return name;
}

// =============================================================== 
function rightUpdateImg(index){
    let selected_brand_index = right_brand_select.value;
    let img = brandsJSON[selected_brand_index].products[index].img_path
    return img
}

function rightUpdatePrice(index){
    let selected_brand_index = right_brand_select.value;
    let price = brandsJSON[selected_brand_index].products[index].price;
    return price;
}

function rightUpdateBrand(){
    let selected_brand_index = right_brand_select.value;
    let name = brandsJSON[selected_brand_index].name;
    return name;
}

function rightUpdateName(index){
    let selected_brand_index = right_brand_select.value;
    let name = brandsJSON[selected_brand_index].products[index].name;
    return name;
}


