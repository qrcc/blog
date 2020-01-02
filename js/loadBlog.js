function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    div.appendChild(sectionLaber);
    for(i=0;i<x.length;i++)
    {
        var sectionLaber = document.createElement("section");
        alert("1111");
        sectionLaber.className = "dt-main effect";
        alert(0);
        var divContentLaber = document.createElement("div");
        alert(1);
        divContentLaber.className = "dt-content";
        alert(2);
        sectionLaber.appendChild(divContentLaber);
        alert(3);
        div.appendChild(sectionLaber);
        alert(4);
        var date = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue;
    }
}