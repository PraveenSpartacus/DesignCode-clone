window.addEventListener('load', ()=>{
    char = [["R","S"],["e","w"],["a","i"],["c","f"],["t","t"]];
    arr = document.getElementsByClassName("letter")
    arr = [...arr]
    arr.map((ele)=>{
        ele.style.animationName = "fade"
    })

    l5 = arr[4];
    flag = false;
    i = 1
    setInterval(() => {
        x = getComputedStyle(l5).opacity;
        if(x == 1)
            flag = true;
        if(x == 0 && flag){
            arr.map((ele,j)=>{
                ele.innerText = char[j][i];
            })
            flag = false;
            i = (i+1)%2
        }        
    }, 400);  
}
);
