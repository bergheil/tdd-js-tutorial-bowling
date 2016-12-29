var Bowling = {
    calcolaPunteggio: function(tiri) {
        var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            punteggio += tiro[0] + tiro[1];
        });
        
        return punteggio;
    }
};
