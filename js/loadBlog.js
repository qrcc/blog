function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    for(i=0;i<x.length;i++)
    {
        var date = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue;
        var inner = "<div>"+date+"</div>";
        alert(inner);
        var sectionLaber = document.createElement("section");
        sectionLaber.className = "dt-main effect";
        sectionLaber.innerHTML = inner;
        div.appendChild(sectionLaber);
        
        
    }
}