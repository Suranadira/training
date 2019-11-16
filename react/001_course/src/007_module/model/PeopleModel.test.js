import { PeopleModel } from "./PeopleModel";
import { Person } from "./Person";
import { context } from "../Context";

describe("People Model", () => {
  it("creates a person", () => {
    let p = new Person(1, "Einstein", "Albert");
    expect(p.lastname).toBe("Einstein");
  });
  it("creates a person using PeopleModel", () => {
    let peopleModel = context.peopleModel;
    let idOfEinstein = peopleModel.add("Einstein", "Albert");
    let p = peopleModel.personWith(idOfEinstein);
    expect(p.lastname).toBe("Einstein");
  });
});
