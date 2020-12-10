const requestURL = 'https://jsonplaceholder.typicode.com/users';

function createTable(url) {
    return fetch(url).then(function(response) {
        return response.json().then(function(data) {
            var table = "<table border='5px'><thead><tr><td>#</td><td>Name</td><td>Username</td><td>Email</td></thead><tbody><tr>";
            for (i in data) {
                table += "<td>" + data[i].id + "</td>";
                table += "<td>" + data[i].name + "</td>";
                table += "<td>" + data[i].username + "</td>";
                table += "<td>" + data[i].email + "</td></tr>";
            }
            table += "</tbody>";
            document.writeln(table);
        })
    })
}