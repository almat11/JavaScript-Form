function checkName() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(1) > input[type=text]");
    var str = elem.value.toLowerCase().split(" ");
    // Capitalize
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join(" ");
    str = str.split("-");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("-");
    str = str.split("'");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("'");
    // Strip digits
    if (str.match(/[^a-zA-Z '-]/) != null) {
    document.getElementById("name_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("name_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function checkStreet() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(2) > input[type=text]");
    var str = elem.value.toLowerCase().split(" ");
    // Capitalize
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join(" ");
    str = str.split("-");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("-");
    str = str.split("'");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("'");
    // Strip digits
    if (str.match(/[^0-9a-zA-Z '-]/) != null) {
    document.getElementById("street_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("street_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function checkHouseNumber() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(3) > input[type=text]");
    var str = elem.value.split(" ");

    str = str.join("");
    // Strip digits
    if (str.match(/[^0-9,/]/) != null) {
    document.getElementById("house_number_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("house_number_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function checkZIP() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(4) > input[type=text]");
    var str = elem.value.toUpperCase().split(" ");

    str = str.join("'");
    // Strip digits
    if (str.match(/[^a-zA-Z0-9]/) != null) {
    document.getElementById("zip_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("zip_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function checkCity() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(5) > input[type=text]");
    var str = elem.value.toLowerCase().split(" ");
    // Capitalize
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join(" ");
    str = str.split("-");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("-");
    str = str.split("'");
    for (let x = 0; x < str.length; x++) {
        str[x] = str[x].charAt(0).toUpperCase() + str[x].substring(1);
    }
    str = str.join("'");
    // Strip digits
    if (str.match(/[^a-zA-Z -]/) != null) {
    document.getElementById("city_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("city_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function checkIban() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(6) > input[type=text]");
    let str = rec_split(elem.value.toUpperCase().replace(/ /g, ""), 4);
    str = str.join(" ");
    elem.value = str;
    if (!(str.match(/[^a-zA-Z0-9 ]/) == null || str.match(/[a-zA-Z]{2}\d{2}( \d{1,4})*/) != null || !(22 <= str.length <= 30))) {
    document.getElementById("iban_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("iban_error").style.visibility = "hidden";
    }
}

function checkAmount() {
    let elem = document.querySelector("#payment_form > form > div:nth-child(7) > input[type=text]");
    var str = elem.value.split(" ");

    str = str.join("");
    // Strip digits
    if (str.match(/[^0-9.]/) != null) {
    document.getElementById("amount_error").style.visibility = "visible";
        elem.className = "error";
    } else {
        elem.className = "success";
        document.getElementById("amount_error").style.visibility = "hidden";
    }
    elem.value = str;
}

function rec_split(str, len){
    if (str.length > len) {
        return [str.substring(0, len)].concat(rec_split(str.substring(len), len));
    } else {
        return [str];
    }
}

function send() {
    let error = document.evaluate("//input[@class='error']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (error) {
        alert("Please enter correct X".replace("X", error.id))
    } else {
        alert("Payment successful")
    }
}

function validateForm() {
    let error = document.evaluate("//input[@class='error']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    var name = document.forms["form"]["name"].value;
    var street = document.forms["form"]["street"].value;
    var houseNumner = document.forms["form"]["house_number"].value;
    var zip = document.forms["form"]["zip"].value;
    var city = document.forms["form"]["city"].value;
    var iban = document.forms["form"]["iban"].value;
    var amount = document.forms["form"]["amount"].value;

    if (name == "" || name == null) {
    alert("Name must be filled out");
    return false;
    } else if (street == "" || street == null) {
    alert("Street must be filled out");
    return false;
    } else if (houseNumner == "" || houseNumner == null) {
    alert("House numner must be filled out");
    return false;
    } else if (zip == "" || zip == null) {
    alert("ZIP code must be filled out");
    return false;
    } else if (city == "" || city == null) {
    alert("City must be filled out");
    return false;
    } else if (iban == "" || iban == null) {
    alert("IBAN must be filled out");
    return false;
    } else if (amount == "" || amount == null) {
    alert("Amount must be filled out");
    return false;
    } else if (error) {
        alert("Please enter correct X".replace("X", error.id));
        return false;
    } else {
        alert("Payment successful");
        return true;
    }
}


