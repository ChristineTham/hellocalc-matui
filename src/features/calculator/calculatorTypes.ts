export enum NumberType {
  number,
  BigNumber,
  Fraction,
  Complex,
  Matrix,
  Unit,
}

export enum OutputFormat {
  Standard = 'STD',
  All = 'ALL',
  Fixed = 'FIX',
  Scientific = 'SCI',
  Enginerring = 'ENG',
}

export enum AngleMeasure {
  Degree = 'Deg',
  Radian = 'Rad',
  Grad = 'Grad',
}

export enum CoordinateSystem {
  Rectangular,
  Polar,
  Spherical,
}

export enum NumberBase {
  Decimal,
  Hexadecimal,
  Octal,
  Binary,
  BaseN,
}

export type CalculatorState = {
  numberType: NumberType
  outputFormat: OutputFormat
  angleMeasure: AngleMeasure
  coordinateSystem: CoordinateSystem
  numberBase: NumberBase
  precision: number
  stack: {
    x: string
    y: string
    z: string
    t: string
  }
}
