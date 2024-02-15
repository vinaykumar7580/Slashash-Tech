

async function handleSubmit(e){
    e.preventDefault()
    let movie=document.querySelector("#movie").value 

    try{
        let res=await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=847c404a`)
        let data=await res.json()
        console.log("data",data.Search)
        let movieData=data.Search
        handleData(movieData)

    }catch(err){
        console.log(err)
    }

}


let container=document.querySelector(".container")

function handleData(data){
    container.innerHTML=null

    data.forEach((el)=>{
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster
        let title=document.createElement("h3")
        title.textContent=el.Title
        let type=document.createElement("h4")
        type.textContent=el.Type
        let year=document.createElement("h4")
        year.textContent=el.Year
        let favo=document.createElement("button")
        favo.textContent="Favourites"
        favo.addEventListener("click", ()=>{
            handleFavourites(el)
        })

        div.append(image, title, type, year, favo)
        container.append(div)

    })
}

function handleFavourites(data){
    
    fetch(`http://localhost:8080/add-data`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        alert("you liked the product.")
    })
    .catch((err)=>{
        console.log(err)
    })

}

