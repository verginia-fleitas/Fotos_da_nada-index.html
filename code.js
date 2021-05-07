$(`#botao`).click(function() {

    $.ajax({
        url:'https://api.nasa.gov/planetary/apod?api_key=uf8RbnpYOrweazyrP3uMa4I3N0VKIM5yVWWAdjq6&date='+$("#data").val(),
        success: function(result) {
        if(result.media_type == '"image"'){

        
            $('#titulo').html(result.explanation);

            $('#foto').html(`<img src="${result.url}">`);

            $('#copyright').html(result.copyright);
        }
        else{

            $('#titulo').html(result.explanation);

            $('#foto').html(`<iframe src="${result.url}">`)

            $('#copyright').html(result.copyright);
        }
        }

        });

    })  
    
































