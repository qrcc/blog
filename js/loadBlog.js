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
    start = listNum * (pageNum - 1); 
    start = (start < length)?start:(length-length%listNum - 1);
    end = start + listNum - 1;
    end = (end <= length)?end:length - 1;
    for(i = start; i <= end; i++)
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
            var text = sectionLines[j].getElementsByTagName("text");
            inner = inner + "<p>"+ text[0].childNodes[0].nodeValue +"</p>";
            var images = sectionLines[j].getElementsByTagName("image");
            if(images!="null"){
                for(k = 0; k < images.length; k++)
                {
                    inner = inner + "<img src=\"../blogImg/" + routeDay + "/" + images[k].childNodes[0].nodeValue + "\">";
                }
            }
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
    ////首页
    if(pageNum == 1){
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=1" + "\" class=\"Index_on\">首页</a></li>";
    }else{
        var inner = "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=1" + "\">首页</a></li>";
    }
    ////上一页
    lastPageNum = (pageNum - 1) < 1 ? 1 : (pageNum -1);
    inner = inner + "<li><a href=\"" + hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(lastPageNum + 1) + "\">上一页</a></li>";
    ////中间页
    totalPageNum = Math.ceil(length/listNum);
    for(i = 0; i < totalPageNum; i++)
    {
        if(pageNum == i + 1){
            inner = inner + "<li><a href=\""+ hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(i + 1) + "\" class=\"Index_on\">" + String(i + 1) + "</a></li>";
        }else{
            inner = inner + "<li><a href=\"" + hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(i + 1) + "\">" + String(i + 1) + "</a></li>";
        }
    }
    ////下一页
    laterPageNum = (pageNum + 1) > totalPageNum ? totalPageNum : (pageNum + 1);
    inner = inner + "<li><a href=\"" + hp + "//" + host + url +"?d=" + routeDay + "&page=" + String(laterPageNum + 1) + "\">下一页</a></li>";
    ////尾页
    if(pageNum == totalPageNum){
        inner = inner + "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=" + totalPageNum + "\" class=\"Index_on\">尾页</a></li>";
    }else{
        inner = inner + "<li><a href=\"" + hp + "//" +  host +  url +"?d=" + routeDay + "&page=" + totalPageNum + "\">尾页</a></li>";
    }
    var divI = document.getElementById("index");
    var ulLaber = document.createElement("ul");
    ulLaber.innerHTML = inner;
    divI.appendChild(ulLaber);
}