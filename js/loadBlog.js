function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = getElementById("blog")
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("blog");
    for(i=0;i<x.length;i++)
    {
        var sectionLaber = document.createElement("section")
        section.className = "dt-main effect111"
        div.appendChild(sectionLaber);
        div.appendChild(p);
        document.write("<div class='aaaa'>");
        document.write(x[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
        document.write("</div>");
        document.write("<div class='aaaa'>");
        document.write(x[i].getElementsByTagName("heading")[0].childNodes[0].nodeValue);
        document.write("</div>");
        document.write("<div class='aaaa'>");
        document.write(x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue);
        document.write("</div>");
    }
}