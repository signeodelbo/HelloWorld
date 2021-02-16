function popup_alert(){
    alert("Do you have a death wish?");
}

function last_alphabetically(){
    var newArray = ["Cat","Pineapple","River","Factory","Rug","Zurg"];
    var sort = newArray.sort();
    var reverse = sort.reverse();
    console.log(reverse[0]);
}

function list_alphabetical(){
    var first = document.querySelector('#firstWord').value;
    var second = document.querySelector('#secondWord').value;
    var third = document.querySelector('#thirdWord').value;
    var fourth = document.querySelector('#fourthWord').value;
    var newArray = [first,second,third,fourth];
    var sort = newArray.sort();
    document.getElementById('list').innerHTML = sort;
}