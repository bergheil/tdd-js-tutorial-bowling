var Bowling = {
    calcolaPunteggio: function(tiri) {
        var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            if ((tiro[0] + tiro[1]) == 10) {
                punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
                punteggio += tiro[0] + tiro[1];
            }
        });
        
        return punteggio;
    }
};
