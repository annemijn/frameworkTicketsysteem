# FrameworkTicketsysteem
<h2>Dit is een framework die een form valideert met daarbij een optie voor het kiezen van tickets.</h2>

## Code Example
Klik op index.html om de code te zien van het formulier en het aanroepen van de library.
Klik op library.js om de code van de library te zien en hoe ik de gegevens van de form valideer.

Om de form te valideren roep je de functie valideer aan met daarin de functie validate.

```javascript
function valideer()
{
    //roep de library en daarin de functie aan
    Validate();
};
```

Als je wilt kan je de url veranderen waar de form naartoe wijst, de pattern van de gebruikersnaam en van het wachtwoord. Dit zet je in de parameters van de functie die je aanroept.

```javascript
    Validate({website:'https://www.mojo.nl/', pattUsername : /^[a-z0-9_-]{3,15}$/, pattPassword : /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/}); //verander de url van de variabele website, pattern van de gebruikersnaam en van het wachtwoord
};
```

De opties van het drop down menu kan je makkelijk veranderen. je hoeft alleen de value aan te passen.  **Verander niet de value selectcard! dit is namelijk de optie die aangeeft dat er op niks is geklikt!**
```javascript                    
<option value="early">Early Bird</option>
<option value="regular">Regular</option>
<option value="vip">VIP</option>
```

## Demo
[demo](http://i315962.iris.fhict.nl/ticketsysteem/framework.html)


## Installation
Download alle bestanden en have fun! ;)


License

Copyright (c) 2017 Annemijn Portier
