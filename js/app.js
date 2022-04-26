window.addEventListener('scroll',function(){
    var header = document.querySelector("nav");
    header.classList.toggle('sticky',window.scrollY>0);
})

const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".menu");
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
        
    })
    navSlideClose();
}

const navSlideClose = ()=>{
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    for(var i = 0;i<links.length;i++){
        links[i].addEventListener('click',()=>{
            nav.classList.toggle("active");
            burger.classList.toggle("toggle");
        })
    }
}


let list = document.querySelectorAll(".list");
let itembox = document.querySelectorAll(".itembox");

for(let i = 0 ; i<list.length;i++){
    
    list[i].addEventListener('click',function(){
        for(let j = 0 ; j<list.length;j++){
            list[j].classList.remove('active');
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itembox.length;k++){
            
            itembox[k].classList.add('hide');

            if(itembox[k].getAttribute('data-item') == dataFilter){
                itembox[k].classList.remove('hide');
                itembox[k].classList.add('active');
            }
        }


    })
}




navSlide();