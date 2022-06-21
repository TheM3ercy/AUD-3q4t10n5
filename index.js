$(() => {
    const matrix = [];
    let columnRow = 2;

    for (let i = 0; i < columnRow; i++) {
        matrix.push([]);
        for (let j = 0; j < columnRow; j++) {
            matrix[i].push($(`#${i}${j}`).val());
        }
    }

    $('#columnRows').on('change', () => {
        let newColRows = $('#columnRows').val();
        if (newColRows >= columnRow) {
            let diff = newColRows - columnRow;
            columnRow = newColRows;
            for (let i = 0; i < diff; i++) {
                alert(columnRow + i);
                $('#matrix').append(`<tr id="${Number (columnRow) + i}">`)
                for (let j = 0; j < columnRow; j++) {
                    $(`#${Number (columnRow) + i}`).append(`<th><input type="number" id="${columnRow + i + '' + columnRow + j}" name="${columnRow + i + '' + columnRow + j}" required value="2"">`);
                }
            }
        }else{
            let diff = columnRow - newColRows;
            for (let i = 0; i < diff; i++) {
                for (let j = 0; j < columnRow; j++) {
                $('#matrix').append(`<input type="number" id="${i + '' + j}" name="${i + '' + j}" required value="2"">`);
                }
            }
        }
    }); 

    console.log(matrix);
});