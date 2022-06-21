$(() => {
    const matrix = [];

    let newColRows = 2;

    $('#columnRows').on('change', () => {
        $('#matrix').empty();
        newColRows = $('#columnRows').val();
        for (let i = 0; i < newColRows; i++) {
            $('#matrix').append(`<tr id="${i}">`)
            for (let j = 0; j < newColRows; j++) {
                $(`#${i}`).append(`<th><input type="number" id="${i + '' + j}" name="${ i + '' + j}" required value="2"">`);
             }
        }
    });

    $('#calc').on('click', () => {
        calc();
    });

    function calc(){
        $('#ergebninsa').empty();
        $('#ergebninsb').empty();
        matrix.length = 0;
        for (let i = 0; i < newColRows; i++) {
            matrix.push([]);
            for (let j = 0; j < newColRows; j++) {
                matrix[i].push($(`#${i}${j}`).val());
            }
        }
        //1. Zeile
        $('#ergebninsa').append($('<tr>').attr('id', 'a1')
            .append($('<td>').html('1'))
            .append($('<td>').html('0')));

        if($('#columnRows').val() == 3)
        {
            $('#a1').append($('<td>').html('0'));
        }

        $('#ergebninsb').append($('<tr>').attr('id', 'b1')
            .append($('<td>').html(matrix[0][0]))
            .append($('<td>').html(matrix[0][1])));

        if($('#columnRows').val() == 3)
        {
            $('#b1').append($('<td>').html(matrix[0][2]));
        }

        //2. Zeile
        $('#ergebninsa').append($('<tr>').attr('id', 'a2')
            .append($('<td>').html(matrix[1][0]/matrix[0][0]).attr('id', 'a21'))
            .append($('<td>').html('1')));

        if($('#columnRows').val() == 3)
        {
            $('#a2').append($('<td>').html('0'));
        }

        $('#ergebninsb').append($('<tr>').attr('id', 'b2')
            .append($('<td>').html('0'))
            .append($('<td>').html(matrix[1][1]-$('#a21').html() * matrix[0][1]).attr('id', 'b22')));

        if($('#columnRows').val() == 3)
        {
            $('#b2').append($('<td>').html(matrix[1][2] - $('#a21').html() * matrix[0][2]).attr('id', 'b32'));
        }

        //3. Zeile
        $('#ergebninsa').append($('<tr>').attr('id', 'a3')
            .append($('<td>').html(matrix[2][0]/matrix[0][0]).attr('id', 'a31'))
            .append($('<td>').html((matrix[2][0] - ($('#a31').html() + 0) * matrix[0][1])/ $('#b22').html()).attr('id', 'a32')));

        if($('#columnRows').val() == 3)
        {
            $('#a3').append($('<td>').html('1'));
        }

        $('#ergebninsb').append($('<tr>').attr('id', 'b3')
            .append($('<td>').html('0'))
            .append($('<td>').html('0')));

        if($('#columnRows').val() == 3)
        {
            $('#b3').append($('<td>').html(matrix[2][2] - $('#a31').html() * matrix[0][2] - $('#a32').html() * $('#b32').html()));
        }
        
        console.log(matrix);
    }
});