document.querySelector('#textBtn').addEventListener('click', fetchText);
document.querySelector('#jsonBTN').addEventListener('click', fetchJSON);
document.querySelector('#dataBtn').addEventListener('click', fetchAPIData);

function fetchText() {
    fetch('Text file.txt').then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
        document.querySelector('#output').textContent = data;
    }).catch(function (error) {
        console.log(error);
    })
}


function fetchJSON() {
    fetch('customers.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        let table = document.createElement("table");
        let tableHeader = table.insertRow(0);
        tableHeader.innerHTML = "<th>ID</th> <th>Name</th> <th>Company</th> <th>Phone</th>";

        data.forEach(function (customer) {
            let tableRow = table.insertRow();
            tableRow.innerHTML = `<td>${customer.id}</td> <td>${customer.name}</td> <td>${customer.company}</td> <td>${customer.phone}</td>`;

            document.querySelector('#output').append(table);

        });

    })
}


// REST web-service to get a list of all Countries
function fetchAPIData() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

    }).catch(function (error) {
        console.log(error);
    })
}