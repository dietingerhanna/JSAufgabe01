function createNewRow() {
    let tmpRow = document.createElement("tr");

    document.getElementById("data").appendChild(tmpRow);

    return tmpRow;
}

function FillTable(text, tr, isLastCol) {

    let tmpCol = document.createElement("td");

    if (text != null) {
        let value = document.createTextNode(text);
        tmpCol.appendChild(value);
    }

    if (text === null) {
        let btn = document.createElement("button");
        let btnSym = document.createElement("i");
        if (!isLastCol) {
            btn.className = "w3-btn w3-right w3-theme editBtn";
            btnSym.className = "fas fa-edit";
        } else if (isLastCol) {
            btn.className = "w3-btn w3-right w3-theme deleteBtn";
            btnSym.className = "fas fa-trash-alt";
        }
        btn.appendChild(btnSym);
        tmpCol.appendChild(btn);
    }

    tr.appendChild(tmpCol);
}

function addTableDataButtonIcon(icon, tr, modelId, callback) {

}


function deleteRow() {

     for (let tmpDeleteBtn of document.getElementsByClassName("deleteBtn")) {
         tmpDeleteBtn.closest("tr").remove();

         //tmpDelete.closest('tr').remove();


    }

}

function editRow() {

    let table = document.getElementById("data");

    for (let tmpEditBtn of document.getElementsByClassName("editBtn")) {
        tmpEditBtn.addEventListener("click", function () {
            let text = document.getElementsByTagName("td").value = this.innerHTML;
            console.log(text);
            this.closest("tr").isContentEditable = true;
        })
    }
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
