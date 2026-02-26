import score from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    expect(score(0,0)).toEqual("Love - Love");
  });
});



