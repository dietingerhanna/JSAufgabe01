function setSidebarState(isOpen)
{
  let tmpSidebar = document.getElementById("sidebar");
  let tmpSidebarContent = document.getElementById("sidebarContent");
  let tmpWiths = tmpSidebar.getAttribute("sidebar-width");

  let tmpWithDict = new Map();

  for(let tmpWith of tmpWiths.split(" "))
  {
    let tmpWithPair = tmpWith.split(":");

    if(tmpWithPair.length > 1)
    {
      tmpWithDict.set(new Number(tmpWithPair[0]), tmpWithPair[1]);
    }
  }

  let tmpWith = null;

  let tmpWithSortedDict = new Map([...tmpWithDict].sort());

  tmpWithSortedDict.forEach(function (value, key) {
    if(window.innerWidth < key)
    {
      tmpWith = value;
    }
  });

  if(tmpWith === null)
  {
    tmpWith = "30"
  }

  if(isOpen) {
    tmpSidebar.style.display = "";
    tmpSidebar.style.width = tmpWith + "%";
    tmpSidebarContent.style.marginLeft = tmpWith + "%";
  }
  else
  {
    tmpSidebar.style.display = "none";
    tmpSidebar.style.width = "0";
    tmpSidebarContent.style.marginLeft = "0";
  }
}

function isSidebarOpen() {
  return document.getElementById("sidebar").style.display != "none";
}

function setAreaState(area) {
    for(let tmpEntry of document.getElementsByClassName("bs2-menu"))
    {
      document.getElementById(
          tmpEntry.getAttribute("menu-target")).style.display = "none";
    }

    document.getElementById(
        area.getAttribute("menu-target")).style.display = "";
}

function onWindowResize()
{
   let tmpHeader = document.getElementsByTagName("header")[0];
   let tmpMain = document.getElementsByTagName("main")[0];
   let tmpFooter = document.getElementsByTagName("footer")[0];

   tmpMain.style.height = (window.innerHeight - tmpHeader.offsetHeight - tmpFooter.offsetHeight)  + "px";

   setSidebarState(isSidebarOpen());
}

function addStudent(){
    document.getElementById("add").addEventListener("click", function () {
        let tmpFirstName = document.getElementById("idFirstName");
        let tmpLastName = document.getElementById("idLastName");
        let tmpId = document.getElementById("id");

        let data = [tmpId.value, tmpFirstName.value, tmpLastName.value];

        let tmpNewRow = createNewRow();

        for (text of data) {
            FillTable(text, tmpNewRow);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    setSidebarState(false);

    document.getElementById("btnOpenSidebar")
        .addEventListener("click", function () {
            setSidebarState(true);
        });

    document.getElementById("btnCloseSidebar")
        .addEventListener("click", function () {
            setSidebarState(false);
        });


    for (let tmpEntry of document.getElementsByClassName("bs2-menu")) {
        tmpEntry.addEventListener("click", function () {
            setAreaState(tmpEntry);
        });
    }

    onWindowResize();

    window.addEventListener("resize", function () {
        onWindowResize();
    });


    // let tmpBaseUrl = "https://localhost:44363";
    //
    // httpGetRequestJSON(tmpBaseUrl + "/Student", function (student) {
    //
    //     alert(JSON.stringify(student));
    // });
    //
    // let tmpStudent = {
    //     "id": 22,
    //     "schoolClassId": 0,
    //     "firstName": "Hugo",
    //     "lastName": "Mania"
    // };
    //
    // httpPostRequestJSON(tmpBaseUrl + "/Student", tmpStudent, function (student) {
    //
    //     alert(JSON.stringify(student));
    // });

    document.getElementById("btnAdd").addEventListener("click", function () {
        if (document.getElementById("addForm").style.display === "none") {
            document.getElementById("addForm").style.display = "";
        } else {
            document.getElementById("addForm").style.display = "none";
        }
    });


    // document.getElementById("add").addEventListener("click", function () {
    //     let tmpFirstName = document.getElementById("idFirstName");
    //     let tmpLastName = document.getElementById("idLastName");
    //     let tmpId = document.getElementById("id");
    //
    //     let data = [tmpId.value, tmpFirstName.value, tmpLastName.value];
    //
    //     let tmpNewRow = createNewRow();
    //
    //     for (text of data) {
    //         FillTable(text, tmpNewRow);
    //     }
    // });

    // document.getElementById("myInput").addEventListener("keyup", function () {
    //     Search();
    // });

    document.getElementById("myFormId").addEventListener("submit", function (event) {
        event.preventDefault();
        addStudent();
    });

});