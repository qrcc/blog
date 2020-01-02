function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    div.appendChild(sectionLaber);
    alert("2222");
    for(i=0;i<x.length;i++)
    {
        var sectionLaber = document.createElement("section");
        alert("1111");
        sectionLaber.className = "dt-main effect";
        
        div.appendChild(sectionLaber);
        alert(4);
        var date = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue;
    }
}