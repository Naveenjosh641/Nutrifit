let ex = document.getElementsByClassName("temp");
let btn = document.getElementsByTagName("button");

function w(c, setclr){
    let u = [ [8], [0, 1, 2, 3, 7], [0, 8, 9], [0, 2, 8, 9, 10] ];
    let j=0;
    let tmp;

    for(i=1;i<5;i++){
        if(c    +1 == i){
            tmp = setclr;
        }
        else{
            tmp = "black";
        }
        btn[i].style.backgroundColor = tmp;
    }
    
    for(i=0;i<=10;i++){
        if(i == u[c][j]){
            tmp = setclr;
            j++;
        }
        else if(i == 4 || i == 5 || i ==6){
            tmp = setclr;
        }
        else{
            tmp = "white";
        }
        ex[i].style.backgroundColor = tmp;
    }
}



