// =========================================
// RTO CONSULTANT WEBSITE V2
// =========================================

// Change this to your WhatsApp number
const whatsappNumber = "917830723987";

// Services

const services = [

{
name:"Duplicate RC Online Fee Assistance",
icon:"fa-solid fa-file-circle-plus",
documents:[
"Aadhaar Card",
"PAN Card",
"Insurance Copy",
" POLICE REPORT ",
" BANK STAMP ON FORM 26 & Owner Signature ",
"Passport Size Photo"
]
},

{
name:"RC Transfer Online Fee Assistance",
icon:"fa-solid fa-car",
documents:[
"Original RC",
"Insurance",
"Buyer Photo ",
"Seller Photo ",
"Seller Sign on Form 29 & 30 ",
"Buyer Sign on Form 29 & 30 ",
"Vehicle Chassis Tracing on form 29",
"Buyer Aadhaar",
"Seller Aadhaar"
]
},

{
name:"Hypothecation Addition Online Fee Assistance",
icon:"fa-solid fa-building-columns",
documents:[
"RC Copy",
"Bank Documents",
"Insurance",
"PUC"
]
},

{
name:"Private Vehicle Registration Extension Online FeeAssistance",
icon:"fa-solid fa-building-columns",
documents:[
"RC Copy",
"Bank Documents",
"Insurance",
"Owner Photo",
"PUC",
"Vehicle Chassis Tracing on Form 25 & Customer Sign"
]
},

{
name:"NOC  Online Fee Assistance",
icon:"fa-solid fa-building-columns",
documents:[
"RC Copy",
"Bank Documents",
"Insurance",
"Tracing on Form 28"
]
},



{
name:"Hypothecation Termination Online Fee Assistance",
icon:"fa-solid fa-circle-check",
documents:[
"Original RC",
"Bank NOC",
"Insurance",
"PUC"
]
},

{
name:"RC Alteration Online Fee Assistance",
icon:"fa-solid fa-pen-to-square",
documents:[
"RC Copy",
"Supporting Documents"
]
},

{
name:"Insurance Assistance",
icon:"fa-solid fa-shield-halved",
documents:[
"RC Copy",
"Vehicle Details",
"Mobile Number"
]
},
{
name:"GPS + Panic Button + SLD Assistance",
icon:"fa-solid fa-location-dot",
documents:[
"RC Copy",
"Vehicle Details"
]
},

{
name:"Fitness Certificate Online Fee Assistance",
icon:"fa-solid fa-shield-heart",
documents:[
"RC",
"Insurance",
"PUC"
]
},

{
name:"Green Card Online Fee Assistance",
icon:"fa-solid fa-leaf",
documents:[
"RC",
"Insurance",
"PUC"
]
},

{
name:"Fancy Number Online Fee Assistance",
icon:"fa-solid fa-star",
documents:[
"Aadhaar Card",
"PAN Card",
"Mobile Number",
"Vehicle Details"
]
}

];
// =========================================
// Generate Service Cards
// =========================================

const serviceGrid = document.getElementById("serviceGrid");
const serviceSelect = document.getElementById("serviceSelect");

services.forEach((service, index) => {
    const popular = index < 3;

    // Create Service Card
    serviceGrid.innerHTML += `
        <div class="service-card">

    ${popular ? `<span class="popular-badge">Most Popular</span>` : ""}

            <i class="${service.icon}"></i>

            <h3>${service.name}</h3>

            

<button onclick="showDocuments(${index})">
    View Required Documents
</button>

        </div>
    `;

    // Add Service to Contact Form Dropdown
    serviceSelect.innerHTML += `
        <option value="${service.name}">
            ${service.name}
        </option>
    `;

});
// =========================================
// Popup
// =========================================

const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const documentList = document.getElementById("documentList");
const applyWhatsapp = document.getElementById("applyWhatsapp");
const closePopup = document.querySelector(".close-popup");

function showDocuments(index){

    const service = services[index];

    popupTitle.innerHTML = service.name;

    documentList.innerHTML = "";

    service.documents.forEach(doc=>{

        documentList.innerHTML += `<li>✅ ${doc}</li>`;

    });

    applyWhatsapp.href =
    `https://wa.me/${whatsappNumber}?text=Hello, I want to apply for ${service.name}`;

    popupOverlay.style.display = "flex";

}

// Close Button

closePopup.onclick=function(){

    popupOverlay.style.display="none";

}

// Click Outside Popup

popupOverlay.onclick=function(e){

    if(e.target===popupOverlay){

        popupOverlay.style.display="none";

    }

}
// =========================================
// Contact Form
// =========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const service = document.getElementById("serviceSelect").value;

    if(name==="" || mobile===""){

        alert("Please fill all details.");

        return;

    }

    const message =
`Hello,
I want RTO Consultancy.

Name : ${name}
Mobile : ${mobile}
Service : ${service}`;

    window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
"_blank"
);

});