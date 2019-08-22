import { readFile } from "fs";
import { promisify } from "util";
import { ExpressionParser } from "./Frontend/Expression Parsing/ExpressionParser";
import { OperatorScope, OperatorScopeBuilder } from "./Frontend/Expression Parsing/OperatorScopeBuilder";
import { Lexer } from "./Frontend/Lexer/Lexer";
import { ErrorFormatter } from "./Frontend/Parser/ErrorFormatter";
import { Parser } from "./Frontend/Parser/Parser";
import { TypeScope, TypeScopeBuilder } from "./Frontend/Type Scope/TypeScopeBuilder";
import { VariableScope } from "./Frontend/VariableScope/VariableScope";
import { VariableScopeBuilder } from "./Frontend/VariableScope/VariableScopeBuilder";

/*import { readFile } from "fs";
import { promisify } from "util";
import { Lexer } from "./Frontend/Lexer/Lexer";
import { ErrorFormatter } from './Frontend/Parser/ErrorFormatter';
import { Parser } from "./Frontend/Parser/Parser";
import { BigUInt } from './Support/Math/BigUInt';
*/
declare const WebAssembly: any;
export default async function main() {
  const path = process.argv[2];
  const content = await promisify(readFile)(path || "testFile");
  const lexer = new Lexer(path, content.toString());
  const parser = new Parser(lexer);
  const result = parser.parseSourceFile();
  const errorFormatter = new ErrorFormatter(lexer.sourceString, path, parser.errors);

  const globalOperatorScope = new OperatorScope();
  const globalTypeScope = new TypeScope();
  const globalVariableScope = new VariableScope();

  const typeScopeBuilder = new TypeScopeBuilder(result);
  const operatorScopeBuilder = new OperatorScopeBuilder(result, parser.errors);
  const variableScopeBuilder = new VariableScopeBuilder(result, parser.errors);
  const expressionParser = new ExpressionParser(result, parser.errors);

  typeScopeBuilder.populateGlobalTypeScope(globalTypeScope);
  operatorScopeBuilder.populateGlobalOperatorScope(globalOperatorScope);
  variableScopeBuilder.populateGlobalVariableScope(globalVariableScope);

  typeScopeBuilder.buildScopes();
  operatorScopeBuilder.buildScopes();
  expressionParser.parseExpressions();
  variableScopeBuilder.buildScopes();

  console.log(result.toString("", true, true));
  console.log(errorFormatter.toString());
  // instance.exports.main(12);*/
}
