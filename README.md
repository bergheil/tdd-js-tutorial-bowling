# Tutorial di Test Drive Development in javascript #
[![Build Status](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling.svg?branch=master)](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![codecov](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling/branch/master/graph/badge.svg)](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/gpa.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Issue Count](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/issue_count.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)

Progetto in fase di sviluppo...

Questo tutorial ha l'obiettivo di illustrare l'approccio del TDD orientato ad una implementazione per approssimazioni successive che porta lo sviluppatore a concentrarsi sulle problematiche man mano che esse si presentano.

Ancora oggi, molti sviluppatori sono abituati a svolgere una analisi complessiva sullo sviluppo di un progetto alfine di trovare una soluzione funzionante da poter implementare; questo approccio pone delle grandi difficoltà quando il problema da risolvere è complesso, scoraggiando in particolare le persone che non hanno avuto modo di sperimentare esperienze adeguate.

Attraverso l'utilizzo del procedimento TDD, la soluzione viene costruita per fasi e approssimazioni incrementali che rendono molto più semplice e alla portata di tutti la gestione di un problema complesso.

Git tags:

- passo1: stato iniziale del progetto
- passo2: partita con tutti i tiri che colpiscono un birillo
- passo3: partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo
- passo4: partita con primo frame in strike e tutti gli altri che colpiscono un birillo
- passo5: partita con primi due frame in strike e tutti gli altri che colpiscono un birillo
- passo6: refactoring
- passo7: partita tutti i frame in chiusura e ultimo tiro che colpisce un birillo
- passo8: partita tutti i frame in strike

La pratica del TDD si svolge in 3 fasi distinte: Red Flag, Green Flag e Refactoring.
La prima fase (Red Flag) richiede che il test scritto fallisce alla sua prima esecuzione, a garanzia che il test stesso sia stato scritto bene.

La seconda fase richiede la scrittura del codice che si sta testando, facendo attenzione a scrivere lo stretto necessario per eseguire il test con successo.

Nella terza ed ultima fase, possiamo concentrarci sull'analisi del codice appena scritto, verificando la possibilità di migliorare la sua leggibilità ed eleganza.

### Creazione del progetto
Clonate il progetto tramite il comando
```
git clone https://github.com/gianlucaciarcelluti/tdd-js-tutorial-bowling
```
poi spostatevi nella cartella appena creata e scaricate le librerie necessarie tramite il comando
```
npm install
```

### Passo1: stato iniziale del progetto
Posizionatevi nello stato iniziale del progetto lanciando il seguente comando
```
git checkout passo1
```
Partiamo con un test iniziale per verificare che tutti i tiri fatti a vuoto restituiscano come risultato zero punti scrivendo il seguente codice nel file test/bowlingTest.js
```
describe('bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('partita con tutti i tiri a vuoto', function () {
    var tiri = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    expect(bowling.calcolaPunteggio(tiri)).toEqual(0)
  })
})
```
successivamente scriviamo la seguente funzione da testare all'interno del file src/bowling.js
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    return
  }
}
```
lanciando il test con il seguente comando dovremmo ottenere il fallimento del test come segue
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:23:13.986:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:23:14.007:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:23:14.008:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:23:14.034:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:23:15.353:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#wIPf20S9JFX4UjEhAAAA with id 80746822
PhantomJS 2.1.1 (Mac OS X 0.0.0) bowling partita con tutti i tiri a vuoto FAILED
	Expected null to equal 0.
	test/bowlingTest.js:5:55
	loaded@http://localhost:9876/context.js:151:17
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.007 secs / 0.004 secs)
```
a questo punto passiamo alla fase 2 scrivendo
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    return 0
  }
}
```
rilanciando il test, questa volta dovremmo ottenere la sua esecuzione con successo
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:25:53.304:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:25:53.323:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:25:53.324:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:25:53.387:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:25:54.648:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#flyhaVqaAERUUOljAAAA with id 80882250
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.007 secs / 0.004 secs)
```

### Passo2: partita con tutti i tiri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout passo2
```
Proseguiamo con l'aggiunta del test nel file test/bowlingTest.js per verificare che tutti i tiri fatti colpiscono un birillo e che il risultato finale sia di 20 punti
```
  it("partita con tutti i tiri che colpiscono un birillo", function() {
    var tiri = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolaPunteggio(tiri)).toEqual(20);
  });
```
quindi, la nostra funzione riuscirà a soddisfare solamente il primo test e per superare anche il secondo avrà bisogno di essere modificata, per esempio, nella seguente maniera
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            punteggio += tiro[0] + tiro[1];
        });
        
        return punteggio;
  }
}
```

### Passo3: partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout passo3
```
Se nel primo tiro faremo una chiusura (Spare) e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 29 punti
```
  it("partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo", function() {
    var tiri = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolaPunteggio(tiri)).toEqual(29);
  });
```
quindi, la nostra funzione riuscirà a soddisfare solamente i primi due test e per superare anche il terzo avrà bisogno di essere modificata, in maniera tale da computare, in caso di chiusura, il primo tiro successivo 
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            if ((tiro[0] + tiro[1]) == 10) {
	      // in caso di Spare aggiungo il primo tiro del Frame successivo
              punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
              punteggio += tiro[0] + tiro[1];
            }
        });
        
        return punteggio;
  }
}
```

### Passo4: partita con primo frame in strike e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout passo4
```
Se nel primo tiro faremo uno Strike e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 30 punti
```
  it("partita con primo frame in strike e tutti gli altri che colpiscono un birillo", function() {
    var tiri = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolaPunteggio(tiri)).toEqual(30);
  });
```
per superare anche il quarto test modifichiamo, in maniera tale da computare, in caso di Strike, i 2 tiri del Frame successivo 
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            if (tiro[0] == 10) {
	    	// in caso di Strike aggiungo i 2 tiri del Frame successivo
                punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+1][1];
            } else if ((tiro[0] + tiro[1]) == 10) {
	    	// in caso di Spare aggiungo il primo tiro del Frame successivo
                punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
                punteggio += tiro[0] + tiro[1];
            }
        });
        
        return punteggio;
  }
}
```

### Passo5: partita con primi due frame in strike e tutti gli altri che colpiscono un birillo
Posizionatevi nello stadio successivo del progetto lanciando il seguente comando
```
git checkout passo5
```
Se nei primi tiro faremo uno Strike e tutti gli altri tiri colpiscono un birillo, il risultato finale sarà di 49 punti
```
  it("partita con primo frame in strike e tutti gli altri che colpiscono un birillo", function() {
    var tiri = [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolaPunteggio(tiri)).toEqual(49);
  });
```
per superare anche il quinto test modifichiamo, in maniera tale da computare, in caso di Strike, i 2 tiri del Frame successivo 
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    var punteggio = 0;
        
        tiri.forEach(function(tiro, indice) {
            if (tiro[0] == 10) {
	    	// in caso di Strike aggiungo i 2 tiri del Frame successivo
                punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+1][1];
            } else if ((tiro[0] + tiro[1]) == 10) {
	    	// in caso di Spare aggiungo il primo tiro del Frame successivo
                punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
                punteggio += tiro[0] + tiro[1];
            }
	    if (tiro[0] == 10) {
                if (tiri[indice+1][0] == 10) {
		    // in caso di secondo Strike aggiungo i 2 tiri dei 2 Frame successivi
                    punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+2][0];
                } else {
		    // in caso di Strike aggiungo i 2 tiri del Frame successivo
                    punteggio += tiro[0] + tiri[indice+1][0] + tiri[indice+1][1];
                }
            } else if ((tiro[0] + tiro[1]) == 10) {
	        // in caso di Spare aggiungo il primo tiro del Frame successivo
                punteggio += tiro[0] + tiro[1] + tiri[indice+1][0];
            } else {
                punteggio += tiro[0] + tiro[1];
            }
        });
        
        return punteggio;
  }
}
```
