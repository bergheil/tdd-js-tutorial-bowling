function Bowling() {}

Bowling.prototype = {
    calcolaPunteggio: function(tiri) {
        var me = this;
        var punteggio = 0;
        var primoTiroSuccessivo = 0;
        var secondoTiroSuccessivo = 0;
        
        tiri.forEach(function(tiro, indice) {
            if (indice===9) {
                primoTiroSuccessivo = tiro[2];
                secondoTiroSuccessivo = 0;
            } else {
                primoTiroSuccessivo = tiri[indice+1][0];
                secondoTiroSuccessivo = tiri[indice+1][1];
            }
            
            if (me.isStrike(tiro)) {
                if (me.isStrike(tiri[indice+1])) {
                    punteggio += tiro[0] + primoTiroSuccessivo + tiri[indice+2][0];
                } else {
                    punteggio += tiro[0] + primoTiroSuccessivo + secondoTiroSuccessivo;
                }
            } else if (me.isSpare(tiro)) {
                punteggio += tiro[0] + tiro[1] + primoTiroSuccessivo;
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
