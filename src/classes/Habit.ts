import type { Habit as HabitType } from "@prisma/client";

export class Habit {
  private _id: HabitType["id"];
  private _name: HabitType["name"];
  private _userId: HabitType["userId"];
  private _createdAt: HabitType["createdAt"];
  private _updatedAt: HabitType["updatedAt"];

  public get id(): HabitType["id"] {
    return this._id;
  }
  public set id(value: HabitType["id"]) {
    this._id = value;
  }
  public get name(): HabitType["name"] {
    return this._name;
  }
  public set name(value: HabitType["name"]) {
    this._name = value;
  }
  public get userId(): HabitType["userId"] {
    return this._userId;
  }
  public set userId(value: HabitType["userId"]) {
    this._userId = value;
  }
  public get createdAt(): HabitType["createdAt"] {
    return this._createdAt;
  }
  public set createdAt(value: HabitType["createdAt"]) {
    this._createdAt = value;
  }
  public get updatedAt(): HabitType["updatedAt"] {
    return this._updatedAt;
  }
  public set updatedAt(value: HabitType["updatedAt"]) {
    this._updatedAt = value;
  }

  constructor(data: HabitType) {
    if (!data) throw Error("No habit passed");
    this._id = data.id;
    this._name = data.name;
    this._userId = data.userId;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
  }
}
