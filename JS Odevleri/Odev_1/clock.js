let name = prompt('Adınız Nedir? ');
name = name[0].toUpperCase() + name.slice(1)
document.querySelector('#myName').innerHTML = name; 

const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

setInterval(showTime, 1000);

function showTime() {
    const date = new Date();
    let day = days[date.getDay()-1];
    let localTime = date.toLocaleTimeString();
    let display = ` ${localTime} ${day} `;
    document.querySelector('#myClock').innerHTML = display;
}