if(window.innerWidth > 1000  && window.innerWidth < window.innerHeight){
    document.getElementsByClassName("bg")[0].style.height = "800px";
}
// alert(window.innerWidth);
let isrun = 0;

window.addEventListener('scroll', function(){
    let curpos = window.scrollY;
    let h = document.getElementById('abtus').scrollHeight + document.getElementById('bmi').scrollHeight;
    
    if(curpos >  h){
        // document.getElementsByClassName("bmi")[0].style.transform = 'translateX(calc(50vw - 50%))';
        document.getElementsByClassName("bmi")[0].style.opacity = '100%';
        h += document.getElementById("bmi").scrollHeight;
    }
    
    if(curpos > h){

        var bs = document.querySelectorAll("li > b");
        var clrs = ["lightblue", "lightgreen", "orange", "red"];
        for (var i = 0; i < bs.length; i++) {
            bs[i].style.color = clrs[i];
            bs[i].style.textShadow = "1px 1px 2px black";
        }
  
        h += document.getElementById('diet').scrollHeight;
    }
    if(curpos > h){
        for(i=0;i<11;i++){
            document.getElementsByClassName('temp')[i].style.margin = '30px';
        }
        // console.log("height " + curpos  + " " + window.innerHeight + " doc ht " + document.documentElement.scrollHeight);
    }
    if(window.innerHeight + curpos >= document.documentElement.scrollHeight-200){
        document.getElementsByClassName('myimg')[0].style.transform = "rotateY(0deg)";

        if(isrun == 0)
        {
            isrun = 1;
            let pele = document.querySelector("#contact .para");
            let ele = document.querySelector("#contact  .para  p");
            let txt = ele.innerHTML;
            ele.innerHTML = '';
            ele.style.visibility = "visible";
            document.querySelector("#contact .para span").style.display = "block";
            let idx = 0;
            
            function typer(){
                if(idx == txt.length - 8){
                    pele.style.alignItems = "center";
                }
                if(idx < txt.length){
                    ele.innerHTML += txt[idx];
                    idx++;
                }
                setTimeout(typer, 100);
            }
            typer();
        }
    }
});