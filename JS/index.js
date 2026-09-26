function add_sacola(){
    var mudar_button = window.document.getElementById(`button_compra`)
    var mudar_number_carrinho = window.document.getElementById(`number_carrinho`)
    mudar_number_carrinho.innerHTML = 1
    mudar_button.style.background = `green`
    mudar_button.innerHTML = `ADICIONADO AO CARRINHO`
}
