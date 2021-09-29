function httpGetRequestJSON (url, callback){
    let tmpRequest = new XMLHttpRequest();

    tmpRequest.open("GET", url, true);

    tmpRequest.setRequestHeader("Content-type", "application/json;charset=utf-8")

    tmpRequest.send();

    tmpRequest.onreadystatechange = function () {
        if((this.readyState == 4) && (this.status == 200))
        {
            callback(JSON.parse(this.responseText));
        }
    }
}

function httpPostRequestJSON (url, data, callback){
    let tmpRequest = new XMLHttpRequest();

    tmpRequest.open("POST", url, true);

    tmpRequest.setRequestHeader("Content-type", "application/json;charset=utf-8")

    tmpRequest.send(JSON.stringify(data));

    tmpRequest.onreadystatechange = function () {
        if((this.readyState == 4) && (this.status == 200))
        {
            callback(JSON.parse(this.responseText));
        }
    }

}