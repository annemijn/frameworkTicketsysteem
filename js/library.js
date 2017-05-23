var library = {


    validate: function(Element){      
 
 var message = '';
 var bericht = '';
 var melding = document.getElementById('melding');   //zoek div die melding heet   
var username = document.myform.username.value; //kijk wat de value is van de gebruikersnaam
var isValidusername; 
var isValidpassword;
var isValidticket;

	if (username == '') //als het leeg is
	{
		message = 'je moet wel je gebruikersnaam invullen<br>';
		document.myform.username.style.borderColor = 'red'; //maak een rood randje 
		bericht += message;
	}
	else
		{
			var pattUsername = /^[a-z0-9_-]{3,15}$/; //3-15 karakters met alleen letters, cijfer of symbool“_-”.
			if(!pattUsername.test(username))
			{
				message += '- De gebruikersnaam moet tussen de 3-15 karakters zijn met alleen de symbolen _-<br>';
				document.myform.username.style.borderColor = 'red'; //maak een rood randje 
				bericht += message;
			}
			else
			{
				isValidusername = true;
			}
		}
	
	var password = document.myform.password.value; //kijk wat de value is van het wachtwoord
	if (password == '') //als het leeg is
	{
		message = 'je moet wel je wachtwoord invullen<br>';
		document.myform.password.style.borderColor = 'red'; //maak een rood randje
		bericht += message;
	}
	else
		{
			var pattPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //een nummer, hoofdletter en meer dan zes karakters
			if(!pattPassword.test(password))
			{
				message += '- Het wachtwoord moet een nummer, hoofdletter en meer dan zes karakters zijn.<br>';
				document.myform.password.style.borderColor = 'red'; //maak een rood randje
				bericht += message;
			}
			else
			{
				isValidpassword = true;
			}
		}

	var ddl = document.getElementById("tickets"); //zoek element met id tickets
 	var selectedValue = ddl.options[ddl.selectedIndex].value; //kijk wat de opties zijn van het select element en sla de values op
    if (selectedValue == "selectcard") //als de value van de optie selectcard is
   {
		message = 'Selecteer een ticket<br>';
		document.myform.tickets.style.borderColor = 'red'; //maak een rood randje
		bericht += message;
   }
   else
   {
   	isValidticket = true;
   }

	var website = 'http://www.ticketmaster.nl/'; //maak variabele aan met link naar de website 
       if(isValidpassword == true && isValidticket == true && isValidusername == true) //als alle gegevens goed zijn
    {
    	window.location.href = website; // ga naar de website
    }
	
	if(message !== '') //als element niet leeg is
    {
		Element = bericht;
        melding.innerHTML = Element; //zet in de div melding alles wat de Element heeft opgeslagen
        return false;
    }
	
    },

};
