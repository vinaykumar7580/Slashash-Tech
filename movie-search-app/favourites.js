async function handleApi(){
    try{
        let res=await fetch(`http://localhost:8080/get-data`)
        let data=await res.json()
        handleData(data)
        
    }catch(err){

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
        
        div.append(image, title, type, year)
        container.append(div)

    })
}