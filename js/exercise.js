document.addEventListener("DOMContentLoaded",function(){

    let boxes = document.querySelectorAll('.sbs');

    const obsrv = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let hvrele = entry.target.querySelector('.hvr');
                let imgele = entry.target.querySelector('img');
                let bele = entry.target.querySelector('b');
                if(window.innerWidth > 650) hvrele.style.margin = "30px 10px";
                imgele.style.opacity = '50%';
                bele.style.display = 'block';
            }
        });
    },{
        root:null,
        rootMargin:'0px',
        threshold:0.8
    });
    boxes.forEach(box =>{
        obsrv.observe(box);
    });
});

// let pp = window.scrollY;
// document.addEventListener("scroll",function(){
//     let cp = window.scrollY;
//     if(cp > pp){
//         let hgt = sbs[0].scrollHeight;
//         for(i=4;i<11;i++){
//             if(cp > hgt){
//                 if(window.innerWidth > 650) hvrele[i].style.margin = "30px 10px";
//                 hgt += sbs[i].scrollHeight;
//                 bele[i].style.display = 'block';
//                 imgele[i].style.opacity = '50%';
//             }
//         }
//         pp = cp;
//     }
// });