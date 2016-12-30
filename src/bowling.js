function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    var me = this
    var punteggio = 0
    var primoTiroSuccessivo = 0
    var secondoTiroSuccessivo = 0
    var ultimoTiro = 0

    tiri.push([0])

    tiri.forEach(function (tiro, indice) {
      if (indice === 10) { return }
      if (indice === 9) {
        if (me.isSpare(tiro) || me.isStrike(tiro)) {
          primoTiroSuccessivo = tiro[2]
          if (me.isSecondoStrike(tiro)) {
            secondoTiroSuccessivo = 10
          } else {
            secondoTiroSuccessivo = 0
          }
        } else {
          primoTiroSuccessivo = 0
          secondoTiroSuccessivo = 0
        }
      } else {
        primoTiroSuccessivo = tiri[indice + 1][0]
        secondoTiroSuccessivo = tiri[indice + 1][1]
      }

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
    })

    return punteggio
  },

  isSpare: function (tiro) {
    return ((tiro[0] + tiro[1]) === 10)
  },

  isStrike: function (tiro) {
    return (tiro[0] === 10)
  },

  isSecondoStrike: function (tiro) {
    return (tiro[1] === 10)
  }
}
