document.getElementById("table-push-button").onclick = addTableData;
let data = [];
takeDataFromStorage();

//localStorage.clear();

function addTableChild(table, child) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = child[0];
    const tdCount = document.createElement("td");
    tdCount.textContent = child[1];
    const tdPrice = document.createElement("td");
    tdPrice.textContent = child[2];
    tr.appendChild(tdName);
    tr.appendChild(tdCount);
    tr.appendChild(tdPrice);
    table.appendChild(tr);
}

function takeDataFromStorage() {
    const table = document.getElementById("things-table");
    data = JSON.parse(localStorage.getItem('data'));
    if (!data) {
        data = [];
        return;
    }
    console.log(data);
    for(let i = 0; i < data.length; ++i) {
        addTableChild(table, data[i]);
    }
}

function addTableData() {
    const table = document.getElementById("things-table");
    let dataCurrent = [
        document.getElementById("name").value,
        document.getElementById("count").value,
        document.getElementById("price").value,
    ]
    addTableChild(table, dataCurrent);
    data.push(dataCurrent);

    localStorage.setItem('data', JSON.stringify(data));
    return false;
}