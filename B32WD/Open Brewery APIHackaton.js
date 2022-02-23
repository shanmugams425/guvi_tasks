//creating div in body tag
let div = document.createElement("table")
div.setAttribute("class","container")
div.setAttribute("id","content1")
document.body.appendChild(div)


//search bar
let div3 = document.createElement("div")
div3.setAttribute("id","search")
div3.setAttribute("class","input-group mb-3 mt-3 ")
document.getElementById("content1").appendChild(div3)

let search = document.createElement("input")
search.setAttribute("id","myinput")
search.setAttribute("type","text")
search.setAttribute("placeholder","Search")
search.setAttribute("class","form-control")
document.getElementById("search").appendChild(search)



let div1 = document.createElement("div")
div1.setAttribute("id","heading")
div1.setAttribute("class","row")
document.getElementById("content1").appendChild(div1)

let div2 = document.createElement("div")
div2.setAttribute("id","content")
div2.setAttribute("class","row")
document.getElementById("content1").appendChild(div2)

let b = document.getElementById("heading")

let nameTitle=document.createElement("p")
nameTitle.innerText="Name"
nameTitle.classList.add("col-3","fs-3","mb-4","h4","text-primary")
b.appendChild(nameTitle)

let type1=document.createElement("p")
type1.innerText="Type"
type1.classList.add("col-2","fs-3","h4","text-primary")
b.appendChild(type1)

let add1=document.createElement("p")
add1.innerText="Address"
add1.classList.add("col-3","fs-3","h4","text-primary")
b.appendChild(add1)

let url1=document.createElement("p")
url1.innerText="Website Link"
url1.classList.add("col-3","fs-3","h4","text-primary")
b.appendChild(url1)

let number=document.createElement("p")
number.innerText="Ph No"
number.classList.add("col-1","fs-3","h4","text-primary")
b.appendChild(number)


async function brewery(){
    let response = await fetch("https://api.openbrewerydb.org/breweries")
    return response.json()
}

brewery()
.then((response)=>{
  let paradiv = document.getElementById("content")

  response.map((a)=>{

      let name = document.createElement("p")
      name.innerText=a.name
      name.classList.add('col-3',)
      paradiv.appendChild(name)
      
      let type = document.createElement("p")
      type.innerText=a.brewery_type
      type.classList.add('col-2')
      paradiv.appendChild(type)

      let address = document.createElement("p")
      address.innerText=a.street
      address.classList.add('col-3')
      paradiv.appendChild(address)

      let url = document.createElement("p")
      url.innerText=a.website_url
      url.classList.add('col-3',"link-primary")
      paradiv.appendChild(url)
 
      let phone = document.createElement("p")
      phone.innerText=a.phone
      phone.classList.add('col-1')
      paradiv.appendChild(phone)  
    })
})
.catch((er)=>console.error(er))

