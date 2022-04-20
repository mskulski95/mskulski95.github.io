$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {

                let jqBody = $('body');
                let jqItem = $('<div></div>').attr('id', 'dane-programisty');

                let dFirma = $('<p></p>').attr('class', 'dane-programisty').text(`Firma: ${data.firma}`);
                let dImie = $('<p></p>').attr('class', 'dane-programisty').text(`Imie: ${data.imie}`);
                let dNazwisko = $('<p></p>').attr('class', 'dane-programisty').text(`Nazwisko: ${data.nazwisko}`);
                let dZawod = $('<p></p>').attr('class', 'dane-programisty').text(`Zawód: ${data.zawod}`);
                let hr = $('<hr>');


                jqBody.append(jqItem);
                
                jqItem.append(dFirma);
                jqItem.append(dImie);
                jqItem.append(dNazwisko);
                jqItem.append(dZawod);
                jqItem.append(hr);

            });
    });
});