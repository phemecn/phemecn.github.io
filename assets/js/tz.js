function heightToTop(ele){
    //ele为指定跳转到该位置的DOM节点
    let bridge = ele;
    let root = document.body;
    let height = 0;
    do{
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    }while(bridge !== root)
 
    return height;
}
//按钮点击时
someBtn.addEventListener('click',function(){
    window.scrollTo({
        top:heightToTop(targetEle),
        behavior:'smooth'
    })
})