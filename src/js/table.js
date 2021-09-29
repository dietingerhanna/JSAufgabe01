

function createNewRow() {
    let tmpRow = document.createElement("tr");

    document.getElementById("data").appendChild(tmpRow);

    return tmpRow;
}

function FillTable(text, tr) {

    let tmpCol = document.createElement("td");
    let value = document.createTextNode(text);

    tmpCol.appendChild(value);

    tr.appendChild(tmpCol);

}

function Search() {
    let input, filter, table, tr, td, i, textValue;
    let textFound = false;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    table = document.getElementById("data");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        textFound = false;

        for (let j = 0; j < td.length; j++)
            if (td[j]) {
                textValue = td[j].textContent || td[j].innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1 || textFound) {
                    tr[i].style.display = "";
                    textFound = true;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
