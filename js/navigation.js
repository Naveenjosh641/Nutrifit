document.addEventListener('DOMContentLoaded', function(){
    fetch("navigation.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navi").innerHTML = data;
        changes();
    });
});
function changes(){
    let navbar = document.getElementById("header");
    let prevpos = window.scrollY;

    window.onscroll = function(){
        let curntpos = window.scrollY;
        let tmp;
        
        if(window.innerWidth >= 425){
            tmp = "-75px";
        }
        else{
            tmp = "-50px";
        }

        if(curntpos > prevpos){
            navbar.style.top=tmp;
        }
        else{
            navbar.style.top="0";
        }

        prevpos = curntpos;
    }
}
    let dd = document.getElementsByClassName("line");
    let dwn = document.getElementsByClassName("down");
    let click = 0;
    function clos(){
        if(window.innerWidth < 575){
            click = 0;
            dwn[0].style.height = "0";
            dd[0].style.float="none";
            dd[0].style.transform="none";
            dd[1].style.display="block";
            dd[2].style.transform="none";
        }
    }
    function droping(){
        if(click == 0){
            click = 1;
            dwn[0].style.height = "224px";
            dd[0].style.float="left";
            dd[0].style.transform="rotate(45deg)";
            dd[1].style.display="none";
            dd[2].style.transform="rotate(135deg)";
        }
        else{
            clos();
        }
    }
