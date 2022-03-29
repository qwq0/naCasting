document.oncontextmenu = function () { return false; };
document.onselectstart = function () { return false; };
function mathpf(x) { return x * x; }
function ctmnum()
{
    move.num = 0
    if (move.w) move.num++;
    if (move.s) move.num++;
    if (move.a) move.num++;
    if (move.d) move.num++;
    if (move.num == 2) move.sp = Math.sqrt(mathpf(move.speed) / 2); else move.sp = move.speed;
}
function keyd()
{
    if (event.keyCode == 122) return;
    if (rkey)
    {
        if (event.keyCode == 123) event.preventDefault();
        if (event.keyCode == 27) event.preventDefault();
        return;
    }
    if (!ready) { event.preventDefault(); return; }
    if (event.keyCode == 87) { move.w = true; ctmnum(); }
    if (event.keyCode == 83) { move.s = true; ctmnum(); }
    if (event.keyCode == 65) { move.a = true; ctmnum(); }
    if (event.keyCode == 68) { move.d = true; ctmnum(); }
    if (event.keyCode == 32) { move.j = true; move.speed = 0.003; ctmnum(); }
    if (event.keyCode == 69) { bgon = !bgon; if (bgon) bag.style.display = "block"; else bag.style.display = "none"; }
    if (event.keyCode == 123) { debug = !debug; if (debug) tiaoshi.style.display = "block"; else tiaoshi.style.display = "none"; }
    if (event.keyCode == 27) { document.getElementById("ztm").style.display = "block"; rkey = true; }
    event.preventDefault();
}
function keyu()
{
    if (event.keyCode == 87) { move.w = false; ctmnum(); }
    if (event.keyCode == 83) { move.s = false; ctmnum(); }
    if (event.keyCode == 65) { move.a = false; ctmnum(); }
    if (event.keyCode == 68) { move.d = false; ctmnum(); }
    if (event.keyCode == 32) { move.j = false; move.speed = 0.002; ctmnum(); }
    event.preventDefault();
}
function mmove()
{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
document.onkeydown = keyd;
document.onkeyup = keyu;
document.onmousemove = mmove;
function rsize()
{
    sumx = document.body.clientWidth;
    sumy = document.body.clientHeight;
    mcanvas.width = sumx;
    mcanvas.height = sumy;
    bsize = Math.max(sumx / numx, sumy / numy);
    ofx = bsize * (numx - sumx / bsize) / 2;
    ofy = bsize * (numy - sumy / bsize) / 2;
}
window.onresize = rsize;
rsize();
function budr() { }
function bufw() { }
function busj()
{
    maingui.push(document.getElementById("mainmenu").innerHTML);
    togame(Math.floor(Math.random() * 5000), true);
}
function buwj() { document.getElementById("rfile").click(); }
function buhub() { window.open("hub/"); }
function backgame()
{
    document.getElementById("ztm").style.display = "none"; rkey = false;
}
function backmm()
{
    while (maingui.size > 1) maingui.pop();
    location.reload();
    /*
    document.getElementById("mmenu").style.display="block";
    document.getElementById("mgui").style.display="none";
    ready=false;rkey=true;
    document.getElementById("mainmenu").innerHTML=maingui[0];
    maingui.pop();
    document.getElementById("playername").value=player.name;
    */
}
function onzz()
{
    zzon = !zzon;
    if (zzon) hc.style.display = "block";
    else hc.style.display = "none";
}
function mgungong(tmp)
{
    stock.now = ((((stock.now + tmp) % stock.maxs) + stock.maxs) % stock.maxs);
    for (let i = 0; i < 9; i++)stock.el[i].style.backgroundColor = "#25252563";
    stock.el[stock.now].style.backgroundColor = "#cccccc63";
}
window.onmousewheel = function ()
{
    mgungong(parseInt(event.wheelDelta / -120));
}
function omd()
{
    switch (event.button)
    {
        case 0:
            mouse.ld = true;
            break;
        case 2:
            mouse.rd = true;
            break;
        case 1:
            mouse.md = true;
            break;
    }
}
function omu()
{
    switch (event.button)
    {
        case 0:
            mouse.ld = false;
            break;
        case 2:
            mouse.rd = false;
            break;
        case 1:
            mouse.md = false;
            break;
    }
}
mcanvas.onmousedown = omd;
mcanvas.onmouseup = omu;
document.onmouseup = omu;
function allowDrop(ev) { ev.preventDefault(); }
function drop(ev, x)
{
    ev.preventDefault();
    let y = parseInt(ev.dataTransfer.getData("Text"));
    x--; y--;
    let tmp1 = stock.item[x]; let tmp2 = stock.itemnum[x];
    stock.item[x] = stock.item[y]; stock.item[y] = tmp1;
    stock.itemnum[x] = stock.itemnum[y]; stock.itemnum[y] = tmp2;
    initstock();
}
function drag(ev, x) { ev.dataTransfer.setData("Text", x); }