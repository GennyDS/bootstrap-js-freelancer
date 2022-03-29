function validatesubmit()
{
    let totale=0;
   let arreysconto =["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"]
   let ore = document.getElementById("ore").value ;
   let sconto = document.getElementById("sconto").value;
   let lavoro = document.getElementById("lavoro").value;



   if(lavoro.value=="backend")
   {
      totale= ore.value* 20.5;
      return totale;
   }
   else if(lavoro.value=="frontend")
   {
       totale=ore.lavoro*15.3;
       return totale;
   }
   else(lavoro.value=="analisi progettuale")
   {
       totale=ore.value*33.6;
       return totale;
   }
        for(let i of arreysconto)
        {
            if(sconto.value==arreysconto[i])
            {
                totale=(totale*25)/100;
                return totale;
            }
            else
            {
                console.log("codice sconto non valido")
            }

        }
}

