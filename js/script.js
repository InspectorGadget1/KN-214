$(window).load(function(){
    
    $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu-active');
    })
    
})
function Checkform(f) {
    var Regletter = new RegExp("^[а-яА-Яі\s?]+$")
    var RegSize = new RegExp("^[0-9]+[хx][0-9]+$")

        for (var i = 0; i < f.elements.length; i++){
            if (f.elements[i].name == "Stretcher" || f.elements[i].name == "End design" || f.elements[i].name == "Name"){
                if(!Regletter.test(f.elements[i].value)){
                    alert("Невірно заповнене поле: " + f.elements[i].name + "\n" +"Вводьте тільки українські букви");
                    return false;
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