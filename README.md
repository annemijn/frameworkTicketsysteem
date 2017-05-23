# FrameworkTicketsysteem
<h2>Dit is een framework die een form valideert met daarbij een optie voor het kiezen van tickets.</h2>

## Code Example
Klik op index.html om de code te zien van het formulier en het aanroepen van de library.
Klik op library.js om de code van de library te zien en hoe ik de gegevens van de form valideer.

De opties van het drop down menu kan je makkelijk veranderen. je hoeft alleen de value aan te passen.  **Verander niet de value selectcard! dit is namelijk de optie die aangeeft dat er op niks is geklikt!**
```javascript                    
<option value="early">Early Bird</option>
<option value="regular">Regular</option>
<option value="vip">VIP</option>
```

Het veranderen van het bericht kan door de value van de var message bij een variabele zoals wachtwoord te veranderen:
```javascript
if (password == '') //als het leeg is
	{
		message = 'je moet wel je wachtwoord invullen<br>';
```

Wil je veranderen waarop de value van een variabele zoals het wachtwoord wordt gecontroleerd?
Dit kan je doen bij een var dat begint met patt. Daarna kan je zelf aangeven waarop het gecontroleerd moet worden:
```javascript
var pattPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //een nummer, hoofdletter en meer dan zes karakters
```

Als alle gegevens goed zijn ingevuld, wordt de gebruiker doorgestuurd naar een ticketwebsite. De URL kan je aanpassen bij de variable website:
```javascript
	var website = 'http://www.ticketmaster.nl/'; //maak variabele aan met link naar de website 
```

## Demo
[demo](http://i315962.iris.fhict.nl/ticketsysteem/framework.html)


## Installation
Download alle bestanden en have fun! ;)


License

Copyright (c) 2017 Annemijn Portier
