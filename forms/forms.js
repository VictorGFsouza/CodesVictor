const form = document.getElementById('orderForm')

form.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]:checked').value
    const cheese = document.querySelector('input[name="cheese"]:checked').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value + "\n"
    })

    console.log({
        name, 
        address, 
        breadType,
        main,
        cheese,
        salad, 
        observations
    })

    alert(
        "Pedido realizado!" + 
        "\nNome do cliente: " + name + 
        "\nEndereço para entrega: " + address +
        "\nHamburger: " + main + 
        "\nQueijo: " + cheese + 
        "\nTipo de pão: " + breadType + 
        "\nSalada: \n" + salad +
        "Observações: " + observations 
    )

    document.querySelectorAll('input[name="main"]:checked').forEach(function(item){
        let remove = item
        remove.checked = false
      })

    document.querySelectorAll('input[name="cheese"]:checked').forEach(function(item){
        let remove = item
        remove.checked = false
      })
      
      document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        let remove = item
        remove.checked = false
      })
})