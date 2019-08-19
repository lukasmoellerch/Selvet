import { Token } from "../../Lexer/Token";
import { Block } from "./Block";
import { ExpressionWrapper } from "./EpxressionWrapper";
import { Statement } from "./Statement";

export class WhileStatement extends Statement {
  public whileKeyword: Token;
  public condition: ExpressionWrapper;
  public block: Block;
  constructor(whileKeyword: Token, condition: ExpressionWrapper, block: Block) {
    super();
    this.whileKeyword = whileKeyword;
    this.condition = condition;
    this.block = block;
    this.children = [whileKeyword, condition, block];
  }
}
