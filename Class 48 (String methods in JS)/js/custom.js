function myFunc1() {
    let txt1 = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = txt1.replace("Microsoft", "W3school");
}

function myFunc2() {
    let txt1 = document.getElementById("demo11").innerHTML;
    document.getElementById("demo11").innerHTML = txt1.replace(/Microsoft/g, "W3school");
}

function myFunc3() {
    let txt1 = document.getElementById("demo12").innerHTML;
    document.getElementById("demo12").innerHTML = txt1.replace(/MICROSOFT/gi, "W3school"); // /g global, /i insensitive. we can use both this way /gi
}
/*
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set.

By default, the replace() method is case sensitive.

To replace case insensitive, use a regular expression with an /i flag (insensitive)
*/