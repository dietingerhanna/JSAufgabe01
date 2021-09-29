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
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}