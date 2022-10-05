window.addEventListener('load', ()=>{
        var l3 = document.getElementById("l3");
        var c = 0;
        setInterval(() => {
            console.log('enter')
            l3.innerHTML = c.toString();
            c++;
            console.log('exit')
        }, 3000);
    }
);
