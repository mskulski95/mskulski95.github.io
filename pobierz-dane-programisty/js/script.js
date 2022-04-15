$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                let jqBody = $('body');

                let dFirma = $('<div></div>').attr('id', 'dane-programisty').text(`Firma: ${data.firma}`);
                let dImie = $('<div></div>').attr('id', 'dane-programisty').text(`Imie: ${data.imie}`);
                let dNazwisko = $('<div></div>').attr('id', 'dane-programisty').text(`Nazwisko: ${data.nazwisko}`);
                let dZawod = $('<div></div>').attr('id', 'dane-programisty').text(`Zawód: ${data.zawod}`);
                let hr = $('<hr>');

                jqBody.append(dFirma);
                jqBody.append(dImie);
                jqBody.append(dNazwisko);
                jqBody.append(dZawod);
                jqBody.append(hr);

            });
    });
});