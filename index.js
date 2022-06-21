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
        matrix.length = 0;
        for (let i = 0; i < newColRows; i++) {
            matrix.push([]);
            for (let j = 0; j < newColRows; j++) {
                matrix[i].push($(`#${i}${j}`).val());
            }
        }
        
        console.log(matrix);
    }
});