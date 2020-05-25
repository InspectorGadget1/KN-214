$(window).load(function(){
    
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu-active');
    })
    $(recall).on('click', function () {
        prompt("Введіть номер телефону: ")
    })
    $(form).on('submit',function(){
        return Checkform(this)
    })
    $(tel_form).on('keypress',function(){
        if ((event.keyCode < 48) || (event.keyCode > 57)) event.returnValue = false
    })
    $(theme_dark).on('click',function(){
        style.href = 'style_dark.css'
    })
    $(theme_light).on('click', function () {
        style.href = 'style.css'
    })
})
function Checkform(f) {
    var RegSize = new RegExp("^[0-9]+[хx][0-9]+$")
    
    for (var i = 0; i < f.elements.length; i++){
        if (f.elements[i].name == "Stretcher" || f.elements[i].name == "End design" || f.elements[i].name == "Name"){
            for(var j=0; j<f.elements[i].value.length;j++){
                if (!isNaN(f.elements[i].value[j]) && f.elements[i].value[j] != ' ' ){
                    alert("Невірно заповнене поле: " + f.elements[i].name + "\n" +"Вводьте тільки букви");
                    return false;
                }
            }
        }
        if (f.elements[i].name == "Size"){
            if (!RegSize.test(f.elements[i].value)) {
                alert("Невірно заповнене поле: " + f.elements[i].name + "\n" + "Вводьте в такому вигляді: 111х111");
                return false;
            }
        }
    }
}
