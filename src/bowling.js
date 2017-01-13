function Bowling () {}

Bowling.prototype = {
  /**
  * Calcola il punteggio della partita analizzando tutti i frame.
  * @param {array} tiri Array di 10 elementi composti ognuno da due tiri.
  * @return {number} Punteggio della partita
  */
  calcolaPunteggio: function (tiri) {
    var me = this
    var punteggio = 0
    var primoTiroSuccessivo = 0
    var secondoTiroSuccessivo = 0
    var ultimoTiro = 0

    tiri.push([0])

    for (var indice = 0; indice < 10; indice++) {
      var tiro = tiri[indice]
      primoTiroSuccessivo = me.calcolaPrimoTiroSuccessivo(tiri, indice)
      secondoTiroSuccessivo = me.calcolaSecondoTiroSuccessivo(tiri, indice)

      if (me.isStrike(tiro)) {
        // console.log(indice + 1)
        if (me.isStrike(tiri[indice + 1])) {
          if (indice === 8) {
            ultimoTiro = tiri[indice + 1][2]
          } else {
            ultimoTiro = tiri[indice + 2][0]
          }
          punteggio += tiro[0] + primoTiroSuccessivo + ultimoTiro
        } else {
          punteggio += tiro[0] + primoTiroSuccessivo + secondoTiroSuccessivo
        }
      } else if (me.isSpare(tiro)) {
        punteggio += tiro[0] + tiro[1] + primoTiroSuccessivo
      } else {
        punteggio += tiro[0] + tiro[1]
      }
    }

    return punteggio
  },

  /**
   * Calcola il punteggio del secondo tiro nel successivo frame.
   * @param {array} tiri Array di 10 elementi composti ognuno da due tiri.
   * @param {number} indice che indica il frame in cui ci si trova
   * @return {number} punteggio per il secondo tiro del successivo frame.
   */
  calcolaSecondoTiroSuccessivo: function (tiri, indice) {
    var me = this
    var punteggio = 0
    var tiro = tiri[indice]
    if (indice === 9) {
      if (me.isSpare(tiro) || me.isStrike(tiro)) {
        if (me.isSecondoStrike(tiro)) {
          punteggio = 10
        } else {
          punteggio = 0
        }
      }
    } else {
      punteggio = tiri[indice + 1][1]
    }
    return punteggio
  },

  /**
   * Calcola il punteggio del primo tiro nel successivo frame.
   * @param {array} tiri Array di 10 elementi composti ognuno da due tiri.
   * @param {number} indice che indica il frame in cui ci si trova
   * @return {number} punteggio per il primo tiro del successivo frame.
   */
  calcolaPrimoTiroSuccessivo: function (tiri, indice) {
    var me = this
    var punteggio = 0
    var tiro = tiri[indice]
    if (indice === 9) {
      if (me.isSpare(tiro) || me.isStrike(tiro)) {
        punteggio = tiro[2]
      }
    } else {
      punteggio = tiri[indice + 1][0]
    }
    return punteggio
  },

  /**
  * Verifica se un frame è uno Spare ovvero se la somma
  * dei due tiri ha come risultato 10.
  * @param {array} tiro Array con i risultati dei due tiri
  * @return {boolean} True se si tratta di uno spare false altrimenti
  */
  isSpare: function (tiro) {
    return ((tiro[0] + tiro[1]) === 10)
  },

  /**
  * Verifica se un frame è uno Strike ovvero se
  * al primo tire vengono abbattuti tutti e 10 birilli.
  * @param {array} tiro Array con i risultati dei due tiri
  * @return {boolean} True se si tratta di uno Strike false altrimenti
  */
  isStrike: function (tiro) {
    return (tiro[0] === 10)
  },

  /**
  * Verifica se l'ultimo tiro dell'ultimo frame è uno Strike.
  * @param {array} tiro Array con i risultati dei due tiri
  * @return {boolean} True se si tratta di uno Strike false altrimenti
  */
  isSecondoStrike: function (tiro) {
    return (tiro[1] === 10)
  }
}
