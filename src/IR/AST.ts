export interface ICompilationUnit {
  globalMutableGlobals: IGLobalMutableGlobal[];
  externalFunctionDeclarations: IExternalFunctionDeclaration[];
  internalFunctionDeclarations: IInternalFunctionDeclaration[];
  functionCode: IInternalFunctionDefinition[];
}
export enum Type {
  ui32,
  si32,
  ui64,
  si64,
  ptr,
  funcptr,
}
export interface IGLobalMutableGlobal {

}
export interface IInternalFunctionDeclaration {

}
export interface IExternalFunctionDeclaration {

}
export interface IInternalFunctionDefinition {

}
export enum InstructionType {
  phi,
  break,
  breakIf,
  breakIfFalse,
  call,
  callFunctionPointer,
  setToConstant,
  setToFunction,
  setToGlobal,
  copy,
  load,
  store,
  convert,
  equalToZero,
  equal,
  notEqual,
  less,
  greater,
  lessEqual,
  greaterEqual,
  countLeadingZeroes,
  countTrailingZeroes,
  add,
  subtract,
  multiply,
  divide,
  remainder,
  and,
  or,
  xor,
  shiftLeft,
  shiftRight,
  rotateleft,
  rotateRight,
  absolute,
  negate,
  floor,
  truncate,
  nearest,
  sqrt,
  minimum,
  maximum,
}
export type FunctionType = [Type[], Type[]]; // arguments, results
export type Variable = number;
export type FunctionIdentifier = string;
export type GlobalIdentifier = string;
export type NumericConstant = number;
export type SSAStatement =
  [InstructionType.phi, Variable, Variable[]]
  | [InstructionType.break]
  | [InstructionType.breakIf, Variable]
  | [InstructionType.breakIfFalse, Variable]
  | [InstructionType.call, FunctionIdentifier, Variable[], Variable[]]
  | [InstructionType.callFunctionPointer, FunctionType, Variable, Variable[], Variable[]]
  | [InstructionType.setToConstant, Variable, NumericConstant]
  | [InstructionType.setToFunction, Variable, FunctionIdentifier]
  | [InstructionType.setToGlobal, Variable, GlobalIdentifier]
  | [InstructionType.copy, Variable, Variable]
  | [InstructionType.load, Variable, Variable, Type]
  | [InstructionType.store, Variable, Variable, Type]
  | [InstructionType.convert, Variable, Variable, Type]
  | [InstructionType.equalToZero, Variable, Variable]
  | [InstructionType.equal, Variable, Variable, Variable]
  | [InstructionType.notEqual, Variable, Variable, Variable]
  | [InstructionType.less, Variable, Variable, Variable]
  | [InstructionType.greater, Variable, Variable, Variable]
  | [InstructionType.lessEqual, Variable, Variable, Variable]
  | [InstructionType.greaterEqual, Variable, Variable, Variable]
  | [InstructionType.countLeadingZeroes, Variable, Variable, Variable]
  | [InstructionType.add, Variable, Variable, Variable]
  | [InstructionType.subtract, Variable, Variable, Variable]
  | [InstructionType.multiply, Variable, Variable, Variable]
  | [InstructionType.divide, Variable, Variable, Variable]
  | [InstructionType.remainder, Variable, Variable, Variable]
  | [InstructionType.and, Variable, Variable, Variable]
  | [InstructionType.or, Variable, Variable, Variable]
  | [InstructionType.xor, Variable, Variable, Variable]
  | [InstructionType.shiftLeft, Variable, Variable, Variable]
  | [InstructionType.shiftRight, Variable, Variable, Variable]
  | [InstructionType.rotateleft, Variable, Variable, Variable]
  | [InstructionType.rotateRight, Variable, Variable, Variable]
  | [InstructionType.absolute, Variable, Variable, Variable]
  | [InstructionType.negate, Variable, Variable]
  | [InstructionType.floor, Variable, Variable]
  | [InstructionType.truncate, Variable, Variable]
  | [InstructionType.nearest, Variable, Variable]
  | [InstructionType.sqrt, Variable, Variable]
  | [InstructionType.minimum, Variable, Variable]
  | [InstructionType.maximum, Variable, Variable];
