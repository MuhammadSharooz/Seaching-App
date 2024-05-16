let main = document.querySelector("#main");
let cardDetail = document.querySelector("#cardDetail");
let brand = document.querySelector(".brand");
let model = document.querySelector(".model");
model.innerHTML+=`<option> Select model name </option>`;
brand.innerHTML+=`<option> Select brand name </option>`;
var value="";

var mobilePhone = {
    iphone :{
        iphone11 :{
            Name : "Apple ",
            model : "iphone 11",
            thickness : "8.3mm",
            Price : "Rs.180,000 ",
            colors:["red","purple", "black","blue"],
            ram:"4GB",
            rom:"64gb/128gb256gb",
            image : "https://m.media-amazon.com/images/I/510Fpe16MoL._AC_SL1000_.jpg"
        },
        iphone12 :{
            Name : "Apple ",
            model : "iphone 12",
            thickness : "7.4mm",
            Price : "Rs.179,999 ",
            colors:["red", "green","white","gray"],
            ram:"4GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg"
        },
         iphone13 :{
            Name : "Apple ",
            model : "iphone 13",
            thickness : "7.7mm",
            Price : "Rs.273,899",
            colors:["red", "green","white","black"],
            ram:"4GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
        },
        iphone14:{
            Name : "Apple ",
            model : "iphone 14",
            thickness : "7.8mm",
            Price : "Rs.194,999",
            colors:["red", "green","white","blue"],
            ram:"6GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg"
        },  
          iphone15:{
            Name : "Apple ",
            model : "iphone 15",
            thickness : "7.8mm",
            Price : "Rs.229,999 ",
            colors:["red", "black","white"],
            ram:"6GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
        },
    },
    samsung :{
        samsungGalaxyS24 :{
            Name : "Samsung ",
            model : "Samsung Galaxy S24",
            thickness : "7.6mm",
            Price : "Rs.269,999",
            colors:["red", "green","white"],
            ram:"8/12GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-1.jpg"
        },
        samsungGalaxyS23:{
            Name : "Samsung ",
            model : "Samsung GalaxyS23",
            thickness : "7.6mm",
            Price : "Rs.359,999",
            colors:["red", "green","white","gray"],
            ram:"8GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg"
        },
        SamsungGalaxyA55 :{
            Name : "Samsung ",
            model : "Samsung Galaxy A55",
            thickness : "8.2mm",
            Price : "Rs 139,999",
            colors:["red", "green","white","yellow"],
            ram:"6-12 GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg"
        },
        SamsungGalaxyC55 :{
            Name : "Samsung ",
            model : "Samsung Galaxy C55",
            thickness : "7.8mm",
            Price : "Rs 102,300",
            colors:["red", "green","white"],
            ram:"8/12GB",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-c55-1.jpg"
        },
        SamsungGalaxyS22Ultra5G: {
            Name : "Samsung ",
            model : "Samsung Galaxy S22",
            thickness : "7.8mm",
            Price : "Rs 299,999",
            colors:["red", "green","white","black"],
            ram:"8/12",
            rom:"64gb/128gb256gb",
            image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-3.jpg"
        },
        SamsungGalaxyS21Ultra5G :{
            Name : "Samsung ",
            model : "Samsung Galaxy S21",
            thickness : "7.8mm",
            Price : "Rs.194,999",
            colors:["red", "green","white","purple"],
            ram:"12/16GB",
            rom:"64gb/128gb256gb",
            image : "https://ultimoelectronics.co.uk/wp-content/uploads/2021/05/Ultimo-Electronics-Refurbished-Samsung-Galaxy-Phantom-Red-S21-Plus-600x600.jpg"
        },
        SamsungGalaxyA34:{
            Name : "Samsung ",
            model : "Samsung Galaxy A34",
            thickness : "7.8mm",
            Price : "Rs.98,499",
            colors:["red", "green","white","yellow"],
            ram:"8GB",
            rom:"64gb/128gb256gb",
            image : "https://images.priceoye.pk/samsung-galaxy-a34-pakistan-priceoye-0nbwm-500x500.webp"
        },
        SamsungGalaxyA04 :{
            Name : "Samsung ",
            model : "Samsung Galaxy A04",
            thickness : "7.8mm",
            Price : "Rs.17,999",
            colors:["black", "red","white"],
            ram:"4GB",
            rom:"64gb/128gb256gb",
            image : "https://images.priceoye.pk/samsung-galaxy-a04-pakistan-priceoye-rwj43-500x500.webp"
        },
        SamsungGalaxyM24 :{
            Name : "Samsung ",
            model : "Samsung Galaxy M24",
            thickness : "7mm",
            Price : "Rs.64,999",
            colors:["red", "green","white"],
            ram:"6GB",
            rom:"64gb/128gb",
            image : "https://cello.pk/CelloProductImages/54/1-c1-samsung-galaxy-m24-8sc1z04g.webp"
        },
},
        Oppo:{
            OppoA18 :{
                Name : "Oppo ",
                model : "Oppo A18",
                thickness : "163.7 x 75 x 8.2mm",
                Price : "Rs: 30,099",
                colors:["red", "green","white","blue"],
                ram:"4GB/128gb",
                rom:"64gb/128gb256gb",
                image : "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a18-1.jpg"
            },
            OppoReno11:{

                Name : "Oppo ",
                model : "Oppo Reno11",
                thickness : " 7.9 mm",
                Price : "Rs.129,999 ",
                colors:["gray", "green","black"],
                ram:"4GB/12gb",
                rom:"64gb/128gb256gb",
                image : "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno11-b.jpg"
            },
            OppoReno115G:{
                Name : "Oppo ",
                model : "Oppo Reno115G",
                thickness : "8.0 mm",
                Price : "Rs. 118,699",
                colors:["black", "green","white"],
                ram:"4GB/12gb",
                rom:"64gb/128gb256gb",
                image : "https://images.priceoye.pk/oppo-reno-11-5g-pakistan-priceoye-30ovw-500x500.webp"
            },
            OppoA54 :{
                Name : "Oppo ",
                model : "Oppo A54",
                thickness :"8.4 mm",
                Price : "Rs.44,499",
                colors:["black", "green","white"],
                ram:"4GB/12gb",
                rom:"64gb/128gb",
                image : "https://images.priceoye.pk/oppo-a54-pakistan-priceoye-f2nhb-500x500.webp"
            },
            OppoF21Pro :{
                Name : "Oppo ",
                model : "Oppo F21 Pro",
                thickness :"7.5mm",
                Price : "Rs.95,999",
                colors:["black", "gray","white"],
                ram:"4GB/12gb",
                rom:"64gb/128gb",
                image : "https://images.priceoye.pk/oppo-f21-pro-pakistan-priceoye-0cy4g-500x500.webp"
            },
            OppoReno8Pro:{
                Name : "Oppo ",
                model : "Oppo Reno8 Pro",
                thickness :"7.5mm",
                Price : "Rs.99,999",
                colors:["black", "purple","white"],
                ram:"8GB/12GB",
                rom:"128GB/256GB",
                image : "https://propakistani.pk/price/wp-content/uploads/2022/05/Oppo-Reno-8-Pro-Price-Pakistan-200x300.png"
            },
            OppoF19:{
                Name : "Oppo ",
                model : "Oppo F19",
                thickness :"8mm",
                Price : "Rs.99,999",
                colors:["black", "red","white"],
                ram:"6GB",
                rom:"128GB",
                image :"https://www.oppo.com/content/dam/oppo/product-asset-library/specs/beta/f19-black-blue-1920.png",
               
            },
            OppoF17Pro:{
                Name : "Oppo ",
                model : "Oppo F17 Pro",
                thickness :"9.5mm",
                Price : "Rs.238,999",
                colors:["black", "gray","white"],
                ram:"12gb/16GB",
                rom:"128GB/512GB",
                image : "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17.jpg"
            },
            OppoFindX7Ultra :{
                Name : "Oppo ",
                model : "Oppo Find X7 Ultra",
                thickness :"9.5mm",
                Price : "Rs.238,999",
                colors:["black", "green","white","blue"],
                ram:"8GB/12GB",
                rom:"128GB/256GB",
                image : "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg"
            },
            OppoK105G :{
                Name : "Oppo ",
                model : "Oppo K105G",
                thickness :"8mm",
                Price : "Rs.238,999",
                colors:["black", "green","white"],
                ram:"8GB",
                rom:"128GB",
                image : "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-.jpg"
            },



        }
}
function renderAll(){
   for( var key in mobilePhone){
    brand.innerHTML +=`<option value='${key}'>${key.toUpperCase()}</option>`
    for (var key1 in mobilePhone[key]){      
         value = mobilePhone[key][key1];
                         
        var colorName = "";
        for(var i=0;i<value.colors.length;i++){
             colorName += `<div class="${value.colors[i]} " onclick="Changeimage()" ></div>`
        }
         
             main.innerHTML +=`
             <div class=" col-12 col-sm-12 col-md-6  col-lg-3 mb-2 ml-2 p-2">
             <div class="card" style="width: 18rem;">
             <img src="${value.image || "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-.jpg"}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title"> ${value.model.toUpperCase() }</h5>
                   <p class="card-text">
                    <h4>Price : ${value.Price}</h4>
                    <div Class ="d-flex gap-1 ">Colors : ${colorName}</div>
                   </p>
                   <a href="#" class="btn btn-primary">Add to Cart</a>
                 </div>
             </div>
         </div>  
              `
}
}
}

     
    
 
 renderAll();

 function setmodel() {
    model.innerHTML="";
    var brandName = brand.value;
    for(var key in mobilePhone[brandName]){
   model.innerHTML +=`<option value='${key}'>${key}</option>`
    }
    
}



function search(){
    main.style.display="none";
    cardDetail.style.display="flex";
    
    var brandName = brand.value;
    var modelName = model.value;
    var value = mobilePhone[brandName][modelName];
    var colorName = "";
    for(var i=0;i<value.colors.length;i++){
                      colorName += `<div class="color-div ${value.colors[i]}" onclick="Changeimage()"></div>`;

    }
    cardDetail.innerHTML=`
    <div class="card mb-3" style="max-width: 940px;">
    <div class="row g-0">
      <div class="col-md-4" style="max-width: 440px;">
      <img src="${value.image || "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-.jpg"}"  class="card-img-top" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title"> ${value.model.toUpperCase() }</h5>
        <p class="card-text">
        <p>Thickness : ${value.thickness}</p>
        <p>RAM : ${value.ram}</p>
        <p>ROM : ${value.rom}</p>
         <h4>Price : ${value.Price}</h4>
         <div Class ="d-flex gap-1 ">Colors : ${colorName}</div>
        </p>
        </div>
      </div>
    </div>
  </div>
    `
    
}

function Clear(){
    main.style.display="flex";
    cardDetail.style.display="none";
    renderAll();
} 