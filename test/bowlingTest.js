describe("bowling", function() {
    var bowling;

    beforeEach(function() {
      bowling = new Bowling();
    });

    it("partita con tutti i tiri a vuoto", function() {
        var tiri = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(0);
    });
    
    it("partita con tutti i tiri che colpiscono un birillo", function() {
        var tiri = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(20);
    });
    
    it("partita con primo frame in chiusura e tutti gli altri che colpiscono un birillo", function() {
        var tiri = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(29);
    });
    
    it("partita con primo frame in strike e tutti gli altri che colpiscono un birillo", function() {
        var tiri = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(30);
    });
    
    it("partita con primi due frame in strike e tutti gli altri che colpiscono un birillo", function() {
        var tiri = [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(49);
    });
    
    it("partita tutti i frame in chiusura e ultimo tiro che colpisce un birillo", function() {
        var tiri = [[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1,1]];
        expect(bowling.calcolaPunteggio(tiri)).toEqual(182);
    });

});
