const date = document.querySelector(".date")





function innerDate() {

    let day = new Date().getDate().toString().padStart(2, 0);
    let month = (new Date().getMonth() + 1).toString().padStart(2, 0);
    let year = new Date().getFullYear().toString();
    let hour = new Date().getHours().toString().padStart(2, 0)
    let minut = new Date().getMinutes().toString().padStart(2, 0)
    let second = new Date().getSeconds().toString().padStart(2, 0)
    let todayDate = day + '.' + month + '.' + year + " " + hour + ':' + minut + ":" + second;
    date.innerHTML = todayDate;
}
innerDate()

setInterval(() => {
    innerDate()
}, 1000)

