export type FormattableValueTypes = string | number | Date | undefined;

export class Base {
  private _value: FormattableValueTypes;

  constructor(value: FormattableValueTypes) {
    this._value = value;
  }

  public get value(): FormattableValueTypes {
    return this._value;
  }
  public set value(value: FormattableValueTypes) {
    this._value = value;
  }

  format() {
    if (typeof this._value === "string") {
      return this.stringFormat(this._value);
    }
    if (typeof this._value === "number") {
      return this.numberFormat(this._value);
    }
    if (this._value instanceof Date) {
      return this.dateFormat(this._value);
    }
  }

  stringFormat(value: string) {
    return value;
  }

  numberFormat(value: number) {
    return new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(value);
  }

  dateFormat(value: Date) {
    return value.toLocaleString();
  }
}
