describe("bowling", function() {

    it("partita con tutti i tiri a vuoto", function() {
        var tiri = 0;
        expect(Bowling.calcolaPunteggio(tiri)).toEqual(null);
    });

});
