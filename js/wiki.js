function wikiAPI() {
    var searchTerm = document.getElementById('searchTerm').value;
    var xhr = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=30&gsrsearch=" + searchTerm;
    xhr.open('GET', url);
    xhr.onload = function() {
        var wikiObject = JSON.parse(this.response);
        //console.log(wikiObject);
        //console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        var pageID = wikiObject.query.pages.pageid;
        var pageURL = "https://en.wikipedia.org/?curid=" + pageID;
        for (var i in pages) {
            //var newDiv = document.createElement('div');
            //newDiv.setAttribute('class','row h4');
            //document.getElementById('wiki').appendChild(newDiv);
            //newDiv.innerText = pages[i].title;
            var newLink = document.createElement('a');
            document.getElementById('pageURL').appendChild(newLink);
            newLink.innerText = pages[i].title;
            document.getElementById('pageURL').onclick = function() {
                document.querySelector('a').setAttribute("href", pageURL);

            }
        }
    }
    xhr.send();
}