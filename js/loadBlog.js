function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    alert(1);
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("blog");
    alert(2);
    var sectionLaber = document.createElement("section");
    alert(3);
    sectionLaber.className = "dt-main effect111";
    alert(4);
    div.appendChild(sectionLaber);
    for(i=0;i<x.length;i++)
    {
        
        alert("ssssss");
    }
}