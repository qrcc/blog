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

function loadBlog(date) {
    //获得参数：每页列出的文档数,文档所属日期,以此获得对应XML文件的位置
    var listNum = 2;
    var routeDay = GetQueryString("d");
    var route = "../xml/blog"+ routeDay +".xml";
    var pageNum = GetQueryString("page");
    //获得XML文件
    xmltext = new XMLHttpRequest;
    xmltext.open("GET",route,false);
    xmltext.send();
    a = xmltext.responseXML;
    //将XML文件内容插入到HTML相应标签中
    var div = document.getElementById("blog");
    //document.getElementById("xmlid").innerHTML = a.getElementsByTagName("to")[2].childNodes[0].nodeValue;
    x = a.getElementsByTagName("date");
    length = x.length;
    //获得页面导航标签
    loadIndex(length,pageNum,listNum,routeDay);
    //获得当前页面文档的起始坐标和终止坐标
    start = listNum * (pageNum - 1); 
    start = (start < length)?start:(length-length%listNum - 1);
    end = start + listNum - 1;
    end = (end <= length)?end:length - 1;
    //迭代出文章
    for(i = start; i <= end; i++)
    {
        var dateLine = x[i].getElementsByTagName("dateLine")[0].childNodes[0].nodeValue;
        var headLine = x[i].getElementsByTagName("headLine")[0].childNodes[0].nodeValue;
        var bodyLine = x[i].getElementsByTagName("bodyLine")[0].getElementsByTagName("section")[0].childNodes[0].nodeValue;
        var inner = "<div class = \"dt-content\">";
        inner = inner + "<div>"+dateLine+"</div>";
        inner = inner + "<h1>"+headLine+"</h1>";
        var sectionLines = x[i].getElementsByTagName("bodyLine")[0].getElementsByTagName("section");
        //迭代出段落
        for(j = 0; j < sectionLines.length; j++)
        {
            //段落中的文字
            var text = sectionLines[j].getElementsByTagName("text");
            inner = inner + "<p>"+ text[0].childNodes[0].nodeValue +"</p>";
            var images = sectionLines[j].getElementsByTagName("image");
            //段落中的图片
            if(images){
                for(k = 0; k < images.length; k++)
                {
                    imgName = images[k].childNodes[0].nodeValue;
                    imgName = imgName.replace(/\s*/g,"");
                    inner = inner + "<img src=\"../blogImg/" + routeDay + "/" + imgName + "\" class = \"aaa\">";
                    //图片描述
                    imgDesc = images[k].getAttribute("describe");
                    if(imgDesc){ inner = inner + "<p class = \"imgDesc\">" + imgDesc + "</p>";}
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