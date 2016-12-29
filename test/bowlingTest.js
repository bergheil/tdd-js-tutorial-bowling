describe("bowling", function() {

    it("partita con tutti i tiri a vuoto", function() {
        var tiri = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(Bowling.calcolaPunteggio(tiri)).toEqual(0);
    });
    
    it("partita con tutti i tiri che colpiscono un birillo", function() {
        var tiri = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        expect(Bowling.calcolaPunteggio(tiri)).toEqual(20);
    });

});
