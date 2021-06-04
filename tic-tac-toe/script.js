let c,arr=Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 0)),count=0;
cells=Array.from(document.getElementsByClassName("col-4"));
cells.forEach(e => {e.addEventListener("click",move,false)});
setx();
function setx(){
    c='X';
    document.getElementById('X').style.boxShadow = "0 0 0 0.25rem rgb(66 70 73 / 50%)";
    document.getElementById('O').style.boxShadow="0 0 0 0";
}
function seto(){
    c='O';
    document.getElementById('O').style.boxShadow = "0 0 0 0.25rem rgb(66 70 73 / 50%)";
    document.getElementById('X').style.boxShadow="0 0 0 0";
}
function move(e){
    if (!count) Array.from(document.getElementsByClassName("btn-dark")).forEach(e=>e.disabled = true);
    let id=e.currentTarget.id;
    let k=parseInt(id)-1,i=parseInt(k/3),j=k%3;
    if(!arr[i][j]){
        count++;
        arr[i][j]=c;
        document.getElementById(id).firstElementChild.innerText=c;
        let r=check_win(c);
        if(r) win(c);
        else if(count==9){
            draw();
        }
        c=(c=='X')?'O':'X';
    }
}
function win(c){
    cross(c+'\n WINS');
}
function draw(){
    cross(' DRAW ');
}
function cross(msg){
    s=
    `height: 100%;
    width: 50%;
    z-index: 8;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.598);`
    elm=document.getElementById("cross");
    elm.style.cssText=s;
    elm.firstElementChild.innerText=msg;
} 
function reset(){
    arr=arr.map(e=>e.map(e1=>0));
    cells.forEach(e=>e.firstElementChild.innerText='');
    count=0;
    setx();
    document.getElementById("cross").style.cssText='';
    document.getElementById("cross").firstElementChild.innerText='';
    Array.from(document.getElementsByClassName("btn-dark")).forEach(e=>e.disabled = false);
}
function check_win(n){
    let rw=cl=dg1=dg2=true;
    for(let i=0;i<3;++i){
        rw=cl=true;
        for(let j=0;j<3;++j){
            if (arr[i][j]!=n) rw=false;
            if (arr[j][i]!=n) cl=false;
        }
        if (rw||cl) return true;
        if (arr[i][i]!=n) dg1=false;
        if (arr[i][2-i]!=n) dg2=false;
    }
    if(dg1||dg2)return true;
    return false;
}
