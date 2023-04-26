console.log("sadsda")

let workers = [{ id: 1, name: "Ivanov I.I.", position: "developer", phone: "7862382784",email:'213',address:"213231" },
{ id: 2, name: "Petrov I.I.", position: "qa", phone: "3442784",email:'',address:"" },
{ id: 3, name: "IWEUJ T.T.", position: "prod", phone: "785465482784",email:'',address:"" },
{ id: 4, name: "IDWDQWDQ G.I.", position: "developer", phone: "7862382784" ,email:'',address:""},
{ id: 5, name: "REEFCE T.I.", position: "developer", phone: "7862382784" ,email:'',address:""}]
function addWorkers() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    workers.forEach(worker => {
        let el = document.createElement('tr')
        el.innerHTML = `<td>${worker.id}</td>
        <td>${worker.name}</td>
        <td>${worker.position}</td>
        <td>${worker.phone}</td>`
        tbody.append(el)
    });
}
addWorkers()
function change(id) {
    let table = document.getElementById("table");
    let good=document.getElementById("goodFella");
    let create=document.getElementById("create");
    switch(id){
        case 1:
            table.style.display='block'
            good.style.display='none'
            create.style.display='none'
            break;
        case 2:
            table.style.display='none'
            good.style.display='block'
            create.style.display='none'
            goodFella()
            break;
        case 3:
            table.style.display='none'
            good.style.display='none'
            create.style.display='block'
            break;

    }
}
function addNewWorker() {
    let worker = {}
    worker.id = document.getElementById('id').value
    worker.name = document.getElementById('name').value
    worker.position = document.getElementById('position').value
    worker.phone = document.getElementById('phone').value
    worker.address=document.getElementById('address').value
    worker.email=document.getElementById('email').value
    workers.push(worker);
    addWorkers()
    console.log(worker)
}
function goodFella() {
    let worker = workers[0];
    document.getElementById('id1').value = worker.id
    document.getElementById('name1').value = worker.name
    document.getElementById('position1').value = worker.position
    document.getElementById('phone1').value = worker.phone
    document.getElementById('address1').value=worker.address
    document.getElementById('email1').value=worker.email
}