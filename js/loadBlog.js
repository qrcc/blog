function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
    return unescape(r[2]);
    }
    return null;
    }

function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    for(i = 0; i < x.length; i++)
    {
        var dateLine = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue;
        var headLine = x[i].getElementsByTagName("headLine")[0].childNodes[0].nodeValue;
        var bodyLine = x[i].getElementsByTagName("bodyLine")[0].getElementsByTagName("section")[0].childNodes[0].nodeValue;
        var inner = "<div class = \"dt-content\">";
        inner = inner + "<div>"+dateLine+"</div>";
        inner = inner + "<h1>"+headLine+"</h1>";
        var sectionLines = x[i].getElementsByTagName("bodyLine")[0].getElementsByTagName("section");
        for(j = 0; j < sectionLines.length; j++)
        {
            inner = inner + "<p>"+ sectionLines[j].childNodes[0].nodeValue +"</p>";
        }
        inner = inner + "</div>";
        var sectionLaber = document.createElement("section");
        sectionLaber.className = "dt-main effect";
        sectionLaber.innerHTML = inner;
        div.appendChild(sectionLaber);
    }
    alert(GetQueryString("d"))
}