$(document).ready(function(){

    $('header button').click(function() {
        $('form').slideDown();
    })
        

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const endereçoNovaImagem = $('#endereço-nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`
        <img src="${endereçoNovaImagem}"/>
        `).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${endereçoNovaImagem}" target="_blank" title="Ver Imagem Em Tamanho Real">
                Ver Imagem Em Tamanho Real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-nova-imagem').val('');
    })
})