const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const total = document.getElementById("total");
const done = document.getElementById("done");

let totalTask = 0;
let doneTask = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let taskText = input.value;

    if (taskText === "") {
        Swal.fire({
            title: "Baka",
            text: "Isi dulu lah tugasnya.",
            imageUrl: "dog-pointing.gif", 
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const btnDone = document.createElement("button");
    btnDone.textContent = "✔";

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "✖";

    btnDone.addEventListener("click", function () {
        if (!li.classList.contains("done")) {
            li.classList.add("done");
            doneTask++;
            updateCount();
        }
    });

    btnDelete.addEventListener("click", function () {
        if (li.classList.contains("done")) {
            doneTask--;
        }
        list.removeChild(li);
        totalTask--;
        updateCount();
    });

    li.appendChild(btnDone);
    li.appendChild(btnDelete);
    list.appendChild(li);

    totalTask++;
    updateCount();
    input.value = "";
});

function updateCount() {
    total.textContent = totalTask;
    done.textContent = doneTask;
}
