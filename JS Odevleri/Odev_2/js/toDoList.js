let taskDOM = document.querySelector('#task');
let listDOM = document.querySelector('#list');

let toastSuccessDOM = document.querySelector('#liveToastSuccess');
let successToast = new bootstrap.Toast(toastSuccessDOM);

let toastErrorDOM = document.querySelector('#liveToastError');
let ErrorToast = new bootstrap.Toast(toastErrorDOM);

let toastErrorDOM2 = document.querySelector('#liveToastError2');
let ErrorToast2 = new bootstrap.Toast(toastErrorDOM2);

function newElement() {


    // zaten var mı Kontrol
    let arr = document.querySelectorAll('li');
    let isItemExist = false;
    for (let arrItem of arr) {
        if (arrItem.innerText == `${taskDOM.value}\n×` || arrItem.innerText == '×') {
            isItemExist = true;
        }
    }
    // boşluk kontrolü
    let chars = [];
    chars = taskDOM.value;
    let isAllCharsSpace = true;
    for (char of chars) {
        if (char != ' ') {
            isAllCharsSpace = false;
        }
    }

    if (taskDOM.value && !isItemExist && !isAllCharsSpace) {
        let li = document.createElement('li');
        li.setAttribute('onclick', 'checkElement()');
        li.setAttribute('class', '');
        li.innerHTML = taskDOM.value;
        taskDOM.value = '';
        // button oluştur ve attribute'larını oluştur
        let button = document.createElement('button');
        button.setAttribute('onclick', "deleteElement()");
        button.setAttribute('type', "button");
        button.setAttribute('class', "close mt-2 mr-3");
        button.setAttribute('aria-label', "Close");
        // button'u li'y ekle
        li.appendChild(button);
        // span oluştur ve attribue'larını ekle
        let span = document.createElement('span');
        span.setAttribute('aria-hidden', "true");
        span.innerHTML = "&times;"
        // span'ı button'a ekle
        button.appendChild(span)
        // li'yi ul'ye ekle
        listDOM.appendChild(li);
        successToast.show();
    }
    else if (taskDOM.value && isItemExist) {
        ErrorToast2.show();
    }
    else {
        ErrorToast.show();
        document.querySelector('#task').value = '';
    }
}

function deleteElement(e) {
    e = window.event;
    let deleteLiItem = e.target.parentNode.parentNode;
    deleteLiItem.remove();
}

function checkElement(e) {
    e = window.event;
    let checkItem = e.target;
    let checkItemClass = checkItem.attributes.class;
    checkItemClass.value == 'checked' ? checkItemClass.value = '' : checkItemClass.value = 'checked';
}