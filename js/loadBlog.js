function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    var sectionLaber = document.createElement("section");
    sectionLaber.className = "dt-main effect";
    div.appendChild(sectionLaber);
    for(i=0;i<x.length;i++)
    {
        var date = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue
        alert( x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue);
    }
}