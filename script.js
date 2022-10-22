window.addEventListener('load', ()=>{

    //REACT -> SWIFT animation in heroSection
    letterAnimation = () => {
        char = [["R","S"],["e","w"],["a","i"],["c","f"],["t","t"]];
        arr = document.getElementsByClassName("letter");
        arr = [...arr];
        arr.map((ele)=>{
            ele.style.animationName = "fade";
        })
        l5 = arr[4];
        flag = false;
        i = 1;
        setInterval(() => {
            x = getComputedStyle(l5).opacity;
            if(x == 1)
                flag = true;
            if(x == 0 && flag){
                arr.map((ele,j)=>{
                    ele.innerText = char[j][i];
                })
                flag = false;
                i = (i+1)%2;
            }        
        }, 400);  
    }

    // to dynamically change the height of the container
    strokeContainerHeight = () => {
        bgResolution = 1.423; // width/height
        container = document.getElementsByClassName("strokeAnimationContainer")[0];
        container.style.height = parseFloat(getComputedStyle(container).width.slice(0,-2))/bgResolution + "px";
    }

    // stroke animation full
    mainAnimation = () => {
        let triggerEle = document.getElementsByClassName("strokebg")[0];
        let container = document.getElementsByClassName("strokeAnimationContainer")[0];
        let triggerAnimation = (entries, observer) => {
            console.log("triggered")
            entries.forEach(entry => {
                console.log(entry.isIntersecting,entry.intersectionRatio)
                if(entry.isIntersecting){
                    container.classList.add("animate");
                    observer.unobserve(triggerEle);
                }
            });
        }
        let options = {
            root: null, //since animation should be relative to viewport
            rootMargin: '0px',
            threshold: 0.7 //trigger animation when every pixel of target is visible
        };
          
        let observer = new IntersectionObserver(triggerAnimation, options);
        observer.observe(triggerEle);
    }


    //startup function calls
    letterAnimation();
    strokeContainerHeight();
    mainAnimation();


    //onresize changes
    window.onresize = () => {
        strokeContainerHeight();
    }
}
);
