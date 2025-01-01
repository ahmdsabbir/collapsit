import * as ts from "typescript";
import { FunctionAnalyzer } from "./helpers/functionRanges";
import { ClassAnalyzer } from "./helpers/classRanges";

/**
 * This class provides methods to analyze TypeScript source code and extract 
 * the text ranges of top-level functions and methods within classes. 
 * It utilizes dedicated helper classes for function and class analysis.
 */
export class RangeAnalyzer {
  private functionAnalyzer: FunctionAnalyzer;
  private classAnalyzer: ClassAnalyzer;

  constructor() {
    this.functionAnalyzer = new FunctionAnalyzer();
    this.classAnalyzer = new ClassAnalyzer();
  }

  /**
   * Retrieves an array of text ranges for all top-level functions and methods 
   * within the given source code.
   *
   * @param sourceCode The TypeScript source code to analyze.
   * @returns An array of `ts.TextRange` objects, each representing the 
   *          start and end positions of a top-level function or method, 
   *          sorted by their starting position.
   */
  public getTopLevelRanges(sourceCode: string): ts.TextRange[] {
    // Create AST from the provided source code
    const sourceFile = ts.createSourceFile(
      "temp.ts",
      sourceCode,
      ts.ScriptTarget.Latest,
      true
    );
  
    const topLevelRanges: ts.TextRange[] = [];

    // Define a recursive function to traverse the AST
    const visit = (node: ts.Node) => {
      if (this.functionAnalyzer.isFunc(node)) {
        // Get the ranges of the function and add them to the result array
        topLevelRanges.push(...this.functionAnalyzer.setNode(node).getRanges());
      }
    
      if (this.classAnalyzer.isClass(node)) {
        // Get the ranges of the class methods and add them to the result array
        const methodRanges = this.classAnalyzer.setNode(node).getRanges();
        topLevelRanges.push(...methodRanges);
      }
    
      // Recursively visit all child nodes of the current node
      node.forEachChild(visit);
    };
  
    // Start the AST traversal from the root of the source file
    visit(sourceFile);

    // Sort the collected ranges by their starting position
    // To-Do: May not sort at all for the sake of performance in the future
    topLevelRanges.sort((a, b) => a.pos - b.pos);
  
    return topLevelRanges;
  }
}