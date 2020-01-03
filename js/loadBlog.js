function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
    context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
    }

function init(){
    loadBlog();
}

function loadIndex(length,pageNum,listNum,routeDay) {
    var inner = "<li><a href=\"#?d=2&page=1\" class=\"Index_on\">首页</a></li>";
    alert(inner);
    var divI = document.getElementById("index");
    var ulLaber = document.createElement("ul");
    ulLaber.innerHTML = inner;
    divI.appendChild(ulLaber);
}

function loadBlog(date) {
    var listNum = 2;
    var routeDay = GetQueryString("d");
    var route = "../xml/blog"+ routeDay +".xml";
    var pageNum = GetQueryString("page");
    xmltext = new XMLHttpRequest;
    xmltext.open("GET",route,false);
    xmltext.send();
    a = xmltext.responseXML;
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    length = x.length;
    loadIndex(length,pageNum,listNum,routeDay);
    start = listNum * pageNum - 1; 
    start = (start < length)?start:(length-length%listNum - 1);
    end = start + listNum;
    end = (end < length)?end:length - 1;
    for(i = start; i < end; i++)
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
}

function loadIndex(length,pageNum,listNum,routeDay) {
    var url=location.pathname;
    var host = location.hostname;
    var hp = window.location.protocol;
    //alert(url);
    //alert(host);
    if(pageNum == 1){
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=1" + "\" class=\"Index_on\">首页</a></li>";
    }else{
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=1" + "\">首页</a></li>";
    }
    totalPageNum = parseInt(length/listNum) + 1;
    for(i = 0; i < totalPageNum; i++)
    {
        if(pageNum == i + 1){
            //inner = inner + "<li><a href=\"" + host +  url +"?d=" + routeDay + "&page=" + String(i + 1) + "\" class=\"Index_on\">" + String(i + 1) + "</a></li>";
            inner = inner + "<li><a href=\""+ hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(i + 1) + "\" class=\"Index_on\">" + String(i + 1) + "</a></li>";
        }else{
            //inner = inner + "<li><a href=\"" + host +  url +"?d=" + routeDay + "&page=" + String(i + 1) + "\">" + String(i + 1) + "</a></li>";
            inner = inner + "<li><a href=\"" + hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(i + 1) + "\">" + String(i + 1) + "</a></li>";
        }
    }
    if(pageNum == totalPageNum){
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=" + totalPageNum + "\" class=\"Index_on\">尾页</a></li>";
    }else{
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=" + totalPageNum + "\">尾页</a></li>";
    }

    var divI = document.getElementById("index");
    var ulLaber = document.createElement("ul");
    ulLaber.innerHTML = inner;
    divI.appendChild(ulLaber);
}