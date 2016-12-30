function Bowling() {}

Bowling.prototype = {
    calcolaPunteggio: function(tiri) {
        var punteggio = 0;
        var me = this;
        
        tiri.forEach(function(tiro, indice) {
            if (me.isStrike(tiro)) {
                if (me.isStrike(tiri[indice+1])) {
                    punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+2][0];
                } else {
                    punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+1][1];
                }
            } else if (me.isSpare(tiro)) {
                punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
                punteggio += tiro[0] + tiro[1];
            }
        });
        
        return punteggio;
    },
    
    isSpare: function(tiro) {
        return ((tiro[0] + tiro[1]) === 10);
    },
    
    isStrike: function(tiro) {
        return (tiro[0] === 10);
    }
};
