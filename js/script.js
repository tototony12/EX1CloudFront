import API_KEY from "./apikey.js";
var form;

form.onsubmit = function (e) {
    e.preventDefault();

    var data = {};
    var input = form[0];
    if (input.name) {
        data[input.name] = input.value;
    }

    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Authorization', 'apikey:' + API_KEY);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    xhr.send(JSON.stringify(data));

    xhr.onerror = function() { alert('error'); };
    xhr.onload = function() { alert('exito'); };
};
