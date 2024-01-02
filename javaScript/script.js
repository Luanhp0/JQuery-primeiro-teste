$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display: none;" ></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
        
        <div class="link">
        <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real"</a>
            ver imagem em tamanho real
        </div>
        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#imagem-nova').val('');
    })

})

