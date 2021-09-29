function createTableRow() {
    let tmpRow = document.createElement("tr");

    document.getElementById("data").appendChild(tmpRow);

    return tmpRow;
}

function createTableData(text, tr) {

    let tmpCol = document.createElement("td");
    let value = document.createTextNode(text);

    tmpCol.appendChild(value);

    tr.appendChild(tmpCol);

}

function Search() {
    var input, filter, table, tr, td, i, textValue;
    let found = false;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        found = false;
        for (let j = 0; j < td.length; j++)
            if (td[j]) {
                textValue = td[j].textContent || td[j].innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1 || found) {
                    tr[i].style.display = "";
                    found = true;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
