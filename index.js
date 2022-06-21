$(() => {
    const matrix = [];


    $('#columnRows').on('change', () => {
        $('#matrix').empty();
        let newColRows = $('#columnRows').val();
        for (let i = 0; i < newColRows; i++) {
            $('#matrix').append(`<tr id="${i}">`)
            for (let j = 0; j < newColRows; j++) {
                $(`#${i}`).append(`<th><input type="number" id="${i + '' + j}" name="${ i + '' + j}" required value="2"">`);
             }
        }
    }); 
});