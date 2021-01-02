const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

     // inserir dados na tabela
 await saveOrphanage(db, {
  lat: "-22.3567724", 
  lng: "-47.3972979",
  name: "Lar das Meninas",
  about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
  whatsapp:"23456819s125",
  images: [
  "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ].toString(),
  instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  opening_hours: "Horário de visitas das 08h às 18h",
  open_on_weekends: "1"
})

// consultar dados da tabela
const selectedOrphanages = await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanages)

// consultar somente um orfanato, pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
console.log(orphanage)


// deletar dado da tabela
console.log(await db.run("DELETE FROM orphanages WHERE id= '4'"))
console.log(await db.run("DELETE FROM orphanages WHERE id= '5'"))
/* Se quiser deletar tudo é só usar DELETE FROM*/

})