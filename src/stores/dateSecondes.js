function getDateFromSeconds(seconds) {
    // Créer un nouvel objet Date en utilisant le nombre de secondes spécifié
    var date = new Date(seconds * 1000);
  
    // Extraire le jour, le mois et l'année de l'objet Date
    var day = date.getDate();
    var month = date.getMonth() + 1; // les mois vont de 0 à 11 du coup voila
    var year = date.getFullYear();
  
    // Return la date sous forme de string
    return day + '/' + month + '/' + year;
  }
  
  // Exemple  :
  console.log(getDateFromSeconds(1577750400)); // affichera "1/1/2020"