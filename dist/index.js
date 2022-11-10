"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
//Defino a un array de tipo Socie, lo inicio vacio//
let socies = [];
//Frech que devuelve los datos
fetch("http://localhost:5000/socies/")
    .then(resp => {
    resp.json()
        .then(data => {
        socies = data.socies;
        console.log(socies);
        //for loop de cada socie dentro del array
        socies.forEach((socie) => {
            let tr = document.createElement("tr");
            //link
            let link = document.createElement("a");
            link.href = "http://localhost:5000/socie/" + socie.nick;
            link.innerText = socie.nombre;
            //td
            let td_nombre = document.createElement("td");
            td_nombre.appendChild(link);
            let td_apellido = document.createElement("td");
            td_apellido.textContent = socie.apellido;
            let td_nick = document.createElement("td");
            td_nick.textContent = socie.nick;
            let td_edad = document.createElement("td");
            td_edad.textContent = socie.edad.toString(10);
            //button
            let td_button = document.createElement("button");
            td_button.textContent = "Mostrar";
            td_button.onclick = function () {
                showSocie(socie);
            };
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_button);
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
        });
    });
});
function showSocie(socie) {
    fetch("http://localhost:5000/socie/" + socie.nick)
        .then(resp => {
        resp.json()
            .then(data => {
            // Aca dentro debe ir todo el codigo que genera el HTML
            //para mostrar el usuario dentro de form
            //Limpiar el Content de app antes!
            let form = document.createElement("form");
            //input nombre
            let input_nombre = document.createElement("input");
            input_nombre.value = socie.nombre;
            input_nombre.className = "input-edit-socie";
            //input apellido
            let input_apellido = document.createElement("input");
            input_apellido.value = socie.apellido;
            input_apellido.className = "input-edit-socie";
            //input nick 
            let input_nick = document.createElement("input");
            input_nick.value = socie.nick;
            input_nick.className = "input-edit-socie";
            //input edad 
            let input_edad = document.createElement("input");
            input_edad.type = "text";
            input_edad.value = socie.edad.toString(10);
            input_edad.className = "input-edit-socie";
            let td_button = document.createElement("button");
            td_button.textContent = "Actualizar";
            form.appendChild(input_nombre);
            form.appendChild(input_apellido);
            form.appendChild(input_nick);
            form.appendChild(input_edad);
            form.appendChild(td_button);
            let p = document.createElement("p");
            p.textContent = data.socie.nombre;
            app === null || app === void 0 ? void 0 : app.replaceChildren(form);
            //app?.appendChild(form);
        });
    });
}
//For loop de cada socie dentro del Array
socies.forEach(socies => {
    let p_nombre = document.createElement("p");
    p_nombre.textContent = socies.nombre;
    app === null || app === void 0 ? void 0 : app.appendChild(p_nombre);
});
