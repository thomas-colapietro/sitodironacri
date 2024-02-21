const path = window.location.pathname
const page = path.split('/').pop()=="" ? "index.html" : path.split('/').pop()
console.log(page)
fetch("prova.json").then(response =>{
  if(!response.ok){
    throw new Error("Errore nella richiesta")
  }
  return response.json()
}).then(data =>{
  if(page != "index.html"){
  const doc = data.find(doc => doc.id === page)
  if(doc){
    const title = doc.title
    const subtitle = doc.subtitle
    const content = doc.content
    document.querySelector("#title").textContent = title
    document.querySelector("#subtitle").textContent = subtitle
    document.querySelector("#content").innerHTML = content
  }else{
    document.querySelector("#title").textContent = "Documento non trovato"
  }
  }
})