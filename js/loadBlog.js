function loadBlog(date) {
    xmltext = new XMLHttpRequest;
    xmltext.open("GET","../xml/blog.xml",false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementsByClassName("aaa");
    alert(div);
    alert(div);
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("blog");
    var sectionLaber = document.createElement("p");
    section.className = "dt-main effect111";
    div.appendChild(p);
    for(i=0;i<x.length;i++)
    {
        
        alert("ssssss");
    }
}