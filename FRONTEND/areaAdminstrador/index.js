document.addEventListener("DOMContentLoaded", function() {

    const produtosDiv = document.getElementById("produtos");
    const mensagensDiv = document.getElementById("mensagens");
    const sobreDiv = document.getElementById("sobre");


    const linkProdutos = document.getElementById("link-produtos");
    const linkMensagens = document.getElementById("link-mensagens");
    const linkSobre = document.getElementById("link-sobre");


    function esconderTodasDivs() {
        produtosDiv.classList.remove("active");
        mensagensDiv.classList.remove("active");
        sobreDiv.classList.remove("active");
    }


    function mostrarDivAtiva(div) {
        div.classList.add("active");
    }


    linkProdutos.addEventListener("click", function(event) {
        event.preventDefault();
        esconderTodasDivs();
        mostrarDivAtiva(produtosDiv);
    });

    linkMensagens.addEventListener("click", function(event) {
        event.preventDefault();
        esconderTodasDivs();
        mostrarDivAtiva(mensagensDiv);
    });

    linkSobre.addEventListener("click", function(event) {
        event.preventDefault();
        esconderTodasDivs();
        mostrarDivAtiva(sobreDiv);
    });


    mostrarDivAtiva(produtosDiv);
});