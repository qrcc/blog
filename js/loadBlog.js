function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/test.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("note");
    for(i=0;i<x.length;i++)
    {
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