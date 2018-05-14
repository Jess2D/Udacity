$('#sizePicker').submit(function(event){
    event.preventDefault(); 
    let height = $('#inputHeight').val(); // valor das linhas
    let weight = $('#inputWeight').val(); //valor das colunas
    makeGrid(height, weight); //ao clicar submit chama função makeGrid()
});

function makeGrid(x,y) {
    $('table tr').remove(); //apaga tabela anteriormente criada
    for(let i = 1; i<=x ; i++){
        $('#pixelCanvas').append(`<tr id = linha${i}></tr>`); //cria as linhas
        for(let j = 1; j<=y; j++){
            $(`#linha${i}`).append("<td></td>"); //preenche as linhas
        }
    }

    $('td').click(function(){
      let color = $('#colorPicker').val(); // valor da cor 
      $(event.target).css('background-color', color);
    });

}
