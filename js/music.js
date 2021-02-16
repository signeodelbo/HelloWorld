function searchMusic(){
    var artistName = document.getElementById('artistInput').value;
    var url = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=" + artistName;
    fetch(url)
        .then(
            function(response) {
                if(response.status !== 200) {
                    console.log('PROBLEM! Status code is: ' + response.status);
                    return;
                }
                response.json().then(function(data) {
                    console.log(data);
                    let jsonContent = data.album;
                    console.log(jsonContent);
                    for (i in jsonContent) {
                        var discographyDiv = document.getElementById('discography');
                        var albumYearDiv = document.createElement('p');
                        albumYearDiv.setAttribute('class', 'h4');
                        albumYearDiv.innerText = jsonContent[i].intYearReleased;
                        var albumNameDiv = document.createElement('p');
                        albumNameDiv.setAttribute('class', 'h4');
                        albumNameDiv.innerText = jsonContent[i].strAlbum;
                        discographyDiv.appendChild(albumYearDiv);
                        discographyDiv.appendChild(albumNameDiv)
                    }
                    document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
                    document.getElementById('albumName').innerText = jsonContent.strAlbum;
                });
            });
}
