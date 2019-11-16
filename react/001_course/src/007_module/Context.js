import { PeopleModel } from "./model/PeopleModel";
import { Person } from "./model/Person";

let context = {};

context.peopleModel = new PeopleModel();
context.samplePerson = new Person(76, "Einstein", "Albert");
//context.samplePeople = [context.samplePerson, new Person(43, "Mustermann", "Hans"), new Person(4711, "Metzger", "Georg") ]

export { context };
