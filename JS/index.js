var number_carrinho = 0

function add_sacola(){
    var mudar_button = window.document.getElementById(`button_compra`)
    mudar_button.style.background = `green`
    mudar_button.innerHTML = `ADICIONADO AO CARRINHO`

    number_carrinho += 1

    var carrinho_numero = document.getElementById(`number_carrinho`)
    carrinho_numero.innerHTML = number_carrinho
}
