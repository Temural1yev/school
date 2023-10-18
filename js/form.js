const back = document.querySelector(".back-student")

const url = document.querySelector("#photo")
const name = document.querySelector("#name")
const surname = document.querySelector("#surname")
const address = document.querySelector("#address")
const dates = document.querySelector("#date")
const course = document.querySelector("#course")
const add = document.querySelector("#add")


add.addEventListener('click', function () {
    let student = {};
    student.url = url.value;
    student.name = name.value;
    student.surname = surname.value;
    student.address = address.value;
    student.date = dates.value;
    student.course = course.value;
    student.details = {};
    student.id = null;

    if (student.name && student.surname && student.address && student.course && student.date) {
        fetch("https://6427fbdc46fd35eb7c492488.mockapi.io/Students", {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                location.href = "students.html"
            })
            .catch(error => console.log(error))
    }

    else {
        alert("Formani toldiring")
    }


})







































back.addEventListener("click", function () {
    location.href = "students.html"
})