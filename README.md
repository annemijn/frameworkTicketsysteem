# frameworkTicketsysteem
<h2>Dit is een framework die een form valideert met daarbij een optie voor het kiezen van tickets.</h2>

## Code Example
Klik op index.html om de code te zien van het formulier en het aanroepen van de library.
Klik op library.js om de code van de library te zien en hoe ik de gegevens van de form valideer.

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
## Demo
[demo](http://localhost/dev/framework2/framework.html)


## Installation
Download alle bestanden en have fun! ;)


License

Copyright (c) 2017 Annemijn Portier
