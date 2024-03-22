function $(TagId) {
    let id = document.getElementById(TagId);
    return id;
}
let log = (msg1,msg2='',msg3='') => {
    console.log(msg1,msg2,msg3);
}
let int = (num) => parseInt(num);
let float = (num) => parseFloat(num);