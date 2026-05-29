const SYMBOLS = new Map([
  ["alpha", "\\alpha"],
  ["beta", "\\beta"],
  ["gamma", "\\gamma"],
  ["delta", "\\delta"],
  ["epsilon", "\\epsilon"],
  ["zeta", "\\zeta"],
  ["eta", "\\eta"],
  ["theta", "\\theta"],
  ["iota", "\\iota"],
  ["kappa", "\\kappa"],
  ["lambda", "\\lambda"],
  ["mu", "\\mu"],
  ["nu", "\\nu"],
  ["xi", "\\xi"],
  ["pi", "\\pi"],
  ["rho", "\\rho"],
  ["sigma", "\\sigma"],
  ["tau", "\\tau"],
  ["upsilon", "\\upsilon"],
  ["phi", "\\phi"],
  ["chi", "\\chi"],
  ["psi", "\\psi"],
  ["omega", "\\omega"],
  ["Gamma", "\\Gamma"],
  ["Delta", "\\Delta"],
  ["Theta", "\\Theta"],
  ["Lambda", "\\Lambda"],
  ["Xi", "\\Xi"],
  ["Pi", "\\Pi"],
  ["Sigma", "\\Sigma"],
  ["Phi", "\\Phi"],
  ["Psi", "\\Psi"],
  ["Omega", "\\Omega"],
  ["phi.alt", "\\varphi"],
  ["epsilon.alt", "\\varepsilon"],
  ["theta.alt", "\\vartheta"],
  ["rho.alt", "\\varrho"],
  ["sigma.alt", "\\varsigma"],
  ["infty", "\\infty"],
  ["oo", "\\infty"],
  ["times", "\\times"],
  ["div", "\\div"],
  ["dot", "\\cdot"],
  ["plus.minus", "\\pm"],
  ["minus.plus", "\\mp"],
  ["pm", "\\pm"],
  ["neq", "\\ne"],
  ["not.eq", "\\ne"],
  ["le", "\\le"],
  ["lt.eq", "\\le"],
  ["ge", "\\ge"],
  ["gt.eq", "\\ge"],
  ["approx", "\\approx"],
  ["equiv", "\\equiv"],
  ["rightarrow", "\\rightarrow"],
  ["to", "\\to"],
  ["leftarrow", "\\leftarrow"],
  ["arrow.r", "\\rightarrow"],
  ["arrow.l", "\\leftarrow"],
  ["arrow.l.r", "\\leftrightarrow"],
  ["arrow.r.long", "\\longrightarrow"],
  ["arrow.l.long", "\\longleftarrow"],
  ["arrow.r.double", "\\Rightarrow"],
  ["arrow.l.double", "\\Leftarrow"],
  ["dots", "\\ldots"],
  ["quad", "\\quad"],
  ["RR", "\\mathbb{R}"],
  ["NN", "\\mathbb{N}"],
  ["ZZ", "\\mathbb{Z}"],
  ["QQ", "\\mathbb{Q}"],
  ["CC", "\\mathbb{C}"],
  ["sum", "\\sum"],
  ["prod", "\\prod"],
  ["integral", "\\int"],
  ["int", "\\int"],
  ["union", "\\cup"],
  ["sect", "\\cap"],
  ["in", "\\in"],
]);
 const FUNCTIONS = new Set([
  "sin",
  "cos",
  "tan",
  "log",
  "ln",
  "exp",
  "lim",
  "min",
  "max",
]);
 const ACCENTS = new Map([
  ["hat", "\\hat"],
  ["bar", "\\bar"],
  ["tilde", "\\tilde"],
  ["dot", "\\dot"],
  ["underline", "\\underline"],
  ["overline", "\\overline"],
]);
 const SHORTHANDS = [
  ["<==>", "\\Longleftrightarrow"],
  ["<-->", "\\longleftrightarrow"],
  ["==>", "\\Longrightarrow"],
  ["<==", "\\Longleftarrow"],
  ["-->", "\\longrightarrow"],
  ["<--", "\\longleftarrow"],
  ["~~>", "\\rightsquigarrow"],
  ["|->", "\\mapsto"],
  ["|=>", "\\Rrightarrow"],
  ["->>", "\\twoheadrightarrow"],
  [">->", "\\rightarrowtail"],
  ["<-<", "\\leftarrowtail"],
  ["<<-", "\\twoheadleftarrow"],
  ["<->", "\\leftrightarrow"],
  ["<=>", "\\Leftrightarrow"],
  ["<<<", "\\lll"],
  [">>>", "\\ggg"],
  ["::=", "\\Coloneqq"],
  ["->", "\\to"],
  ["<-", "\\leftarrow"],
  ["~>", "\\leadsto"],
  ["<~", "\\leftsquigarrow"],
  ["<<", "\\ll"],
  [">>", "\\gg"],
  ["=>", "\\Rightarrow"],
  ["<=", "\\le"],
  [">=", "\\ge"],
  ["!=", "\\ne"],
  [":=", "\\coloneqq"],
  ["=:", "\\eqqcolon"],
  ["[|", "\\llbracket"],
  ["|]", "\\rrbracket"],
  ["||", "\\Vert"],
  ["...", "\\ldots"],
  ["*", "\\ast"],
  ["~", "\\sim"],
];
 const UNICODE = new Map([
  ["≤", "\\le"],
  ["≥", "\\ge"],
  ["≠", "\\ne"],
  ["≈", "\\approx"],
  ["×", "\\times"],
  ["÷", "\\div"],
  ["±", "\\pm"],
  ["∓", "\\mp"],
  ["∞", "\\infty"],
  ["∑", "\\sum"],
  ["∏", "\\prod"],
  ["∫", "\\int"],
  ["∈", "\\in"],
  ["∉", "\\notin"],
  ["∪", "\\cup"],
  ["∩", "\\cap"],
  ["−", "-"],
  ["∗", "\\ast"],
  ["∼", "\\sim"],
  ["≔", "\\coloneqq"],
  ["⩴", "\\Coloneqq"],
  ["≕", "\\eqqcolon"],
  ["≪", "\\ll"],
  ["⋘", "\\lll"],
  ["≫", "\\gg"],
  ["⋙", "\\ggg"],
  ["→", "\\to"],
  ["⟶", "\\longrightarrow"],
  ["↦", "\\mapsto"],
  ["↣", "\\rightarrowtail"],
  ["↠", "\\twoheadrightarrow"],
  ["←", "\\leftarrow"],
  ["⟵", "\\longleftarrow"],
  ["↢", "\\leftarrowtail"],
  ["↞", "\\twoheadleftarrow"],
  ["↔", "\\leftrightarrow"],
  ["⟷", "\\longleftrightarrow"],
  ["⇝", "\\leadsto"],
  ["⟿", "\\rightsquigarrow"],
  ["⇜", "\\leftsquigarrow"],
  ["⇒", "\\Rightarrow"],
  ["⟹", "\\Longrightarrow"],
  ["⟸", "\\Longleftarrow"],
  ["⇔", "\\Leftrightarrow"],
  ["⟺", "\\Longleftrightarrow"],
  ["⟦", "\\llbracket"],
  ["⟧", "\\rrbracket"],
  ["‖", "\\Vert"],
]);
 function typstMathToLatex(input) {
  const source = String(input ?? "");
   if (source.includes("\n")) {
    return parseMultilineMath(source);
  }
   if (source.includes("&")) {
    return `\\begin{aligned} ${parseSingleMath(source)} \\end{aligned}`;
  }
   return parseSingleMath(source);
}
 function parseSingleMath(source) {
  const parser = new Parser(source);
  const latex = parser.parseExpression(new Set()).trim();
  parser.skipSpaces();
   if (!parser.isEnd()) {
    throw parser.error(`Unexpected token '${parser.peek()}'`);
  }
   return latex;
}
 function parseMultilineMath(source) {
  const rows = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.endsWith("\\") ? line.slice(0, -1).trimEnd() : line)
    .map(parseSingleMath);
   if (rows.length === 0) {
    return "";
  }
   if (rows.length === 1) {
    return rows[0];
  }
   const hasAlignment = rows.some((row) => row.includes("&"));
   if (hasAlignment) {
    const alignedRows = rows.map((row) => row.includes("&") ? row : `& ${row}`);
    return `\\begin{aligned} ${alignedRows.join(" \\\\ ")} \\end{aligned}`;
  }
   return `\\begin{gathered} ${rows.join(" \\\\ ")} \\end{gathered}`;
}
 class Parser {
  constructor(input) {
    this.input = input;
    this.index = 0;
  }
   parseExpression(stopChars) {
    const parts = [];
     while (!this.isEnd()) {
      this.skipSpaces();
       if (this.isEnd() || stopChars.has(this.peek())) {
        break;
      }
       if (this.peek() === "\\") {
        this.index += 1;
        parts.push("\\\\");
        continue;
      }
       if (this.peek() === "&") {
        this.index += 1;
        parts.push("&");
        continue;
      }
       const start = this.index;
       try {
        parts.push(this.parseFraction());
      } catch (error) {
        this.index = start;
        parts.push(textFallback(this.readFallbackSegment(stopChars)));
      }
    }
     return joinParts(parts);
  }
   readFallbackSegment(stopChars) {
    const start = this.index;
    let depth = 0;
    let quote = false;
     while (!this.isEnd()) {
      const char = this.peek();
       if (!quote && depth === 0 && stopChars.has(char)) {
        break;
      }
       if (!quote && depth === 0 && /\s/.test(char)) {
        break;
      }
       if (!quote && depth === 0 && "+-=<>|&".includes(char) && this.index > start) {
        break;
      }
       if (char === '"') {
        quote = !quote;
        this.index += 1;
        continue;
      }
       if (!quote && "([{".includes(char)) {
        depth += 1;
      } else if (!quote && ")]}".includes(char)) {
        if (depth === 0) {
          break;
        }
         depth -= 1;
      }
       this.index += 1;
    }
     if (this.index === start) {
      this.index += 1;
    }
     return this.input.slice(start, this.index);
  }
   parseFraction() {
    let left = this.parseAttach();
     while (true) {
      this.skipSpaces();
       if (this.peek() !== "/") {
        break;
      }
       this.index += 1;
      const right = this.parseAttach();
      left = `\\frac{${stripOuterParens(left)}}{${stripOuterParens(right)}}`;
    }
     return left;
  }
   parseAttach() {
    let base = this.parseAtom();
    let subscript = null;
    let superscript = null;
    let primes = "";
     while (!this.isEnd()) {
      this.skipSpaces();
      const char = this.peek();
       if (char === "'") {
        primes += "\\prime";
        this.index += 1;
        continue;
      }
       if (char !== "^" && char !== "_") {
        break;
      }
       this.index += 1;
      const script = this.parseScriptArgument();
       if (char === "^") {
        superscript = script;
      } else {
        subscript = script;
      }
    }
     if (primes) {
      superscript = superscript ? `${primes} ${superscript}` : primes;
    }
     if (subscript !== null) {
      base += `_{${subscript}}`;
    }
     if (superscript !== null) {
      base += `^{${superscript}}`;
    }
     return base;
  }
   parseAtom() {
    this.skipSpaces();
     if (this.isEnd()) {
      throw this.error("Expected expression");
    }
     if (this.peek() === "#") {
      throw this.error("Embedded code with # is evaluator-dependent and unsupported");
    }
     for (const [source, latex] of SHORTHANDS) {
      if (this.startsWith(source)) {
        this.index += source.length;
        return latex;
      }
    }
     const char = this.peek();
     if (char === "√" || char === "∛" || char === "∜") {
      this.index += 1;
      const body = this.parseScriptArgument();
      const degree = char === "∛" ? "3" : char === "∜" ? "4" : null;
      return degree ? `\\sqrt[${degree}]{${body}}` : `\\sqrt{${body}}`;
    }
     if (char === "(") {
      return this.parseDelimited("(", ")", "\\left(", "\\right)");
    }
     if (char === "[") {
      return this.parseDelimited("[", "]", "\\left[", "\\right]");
    }
     if (char === "{") {
      return this.parseDelimited("{", "}", "\\left\\{", "\\right\\}");
    }
     if (char === '"') {
      return this.parseString();
    }
     if (isDigitStart(char)) {
      return this.readNumber();
    }
     if (isIdentifierStart(char)) {
      return this.parseIdentifierOrCall();
    }
     if (UNICODE.has(char)) {
      this.index += 1;
      return UNICODE.get(char);
    }
     const operator = this.parseOperator();
     if (operator) {
      return operator;
    }
     throw this.error(`Unsupported character '${char}'`);
  }
   parseIdentifierOrCall() {
    const name = this.readIdentifier();
    this.skipSpaces();
     if (this.peek() === "(" && this.isSupportedCall(name)) {
      return this.parseCall(name);
    }
     if (SYMBOLS.has(name)) {
      return SYMBOLS.get(name);
    }
     if (FUNCTIONS.has(name)) {
      return `\\${name}`;
    }
     return name;
  }
   isSupportedCall(name) {
    return name === "sqrt"
      || name === "root"
      || name === "frac"
      || name === "binom"
      || name === "vec"
      || name === "mat"
      || name === "cases"
      || name === "op"
      || name === "underover"
      || ACCENTS.has(name)
      || FUNCTIONS.has(name);
  }
   parseCall(name) {
    this.expect("(");
    const args = this.parseArgs();
    this.expect(")");
     if (args.named.length > 0) {
      const names = args.named.map((arg) => arg.name).join(", ");
      throw this.error(`Named arguments are evaluator/layout-dependent and unsupported here: ${names}`);
    }
     if (name === "sqrt") {
      requireArity(args.flat, name, 1, this);
      return `\\sqrt{${args.flat[0]}}`;
    }
     if (name === "root") {
      requireArity(args.flat, name, 2, this);
      return `\\sqrt[${args.flat[0]}]{${args.flat[1]}}`;
    }
     if (name === "frac") {
      requireArity(args.flat, name, 2, this);
      return `\\frac{${args.flat[0]}}{${args.flat[1]}}`;
    }
     if (name === "binom") {
      requireArity(args.flat, name, 2, this);
      return `\\binom{${args.flat[0]}}{${args.flat[1]}}`;
    }
     if (name === "vec") {
      requireAtLeast(args.flat, name, 1, this);
      return matrix("pmatrix", args.flat.map((arg) => [arg]));
    }
     if (name === "mat") {
      validateMatrixRows(args.rows, name, this);
      return matrix("pmatrix", args.rows);
    }
     if (name === "cases") {
      validateMatrixRows(args.rows, name, this);
      for (const row of args.rows) {
        if (row.length !== 2) {
          throw this.error("cases expects exactly 2 entries per row");
        }
      }
      return matrix("cases", args.rows);
    }
     if (ACCENTS.has(name)) {
      requireArity(args.flat, name, 1, this);
      return `${ACCENTS.get(name)}{${args.flat[0]}}`;
    }
     if (name === "op") {
      requireArity(args.flat, name, 1, this);
      return `\\operatorname{${stripTextCommand(args.flat[0])}}`;
    }
     if (name === "underover") {
      requireArity(args.flat, name, 3, this);
      return `\\overset{${args.flat[2]}}{\\underset{${args.flat[1]}}{${args.flat[0]}}}`;
    }
     requireArity(args.flat, name, 1, this);
    return `\\${name} ${parenthesize(args.flat[0])}`;
  }
   parseArgs() {
    const rows = [[]];
    const named = [];
     while (!this.isEnd()) {
      this.skipSpaces();
       if (this.peek() === ")") {
        if (rows.length > 1 || rows[0].length > 0) {
          const lastRow = rows[rows.length - 1];
           if (lastRow.length === 0) {
            throw this.error("Empty math call argument");
          }
        }
         break;
      }
       if (this.peek() === "," || this.peek() === ";") {
        throw this.error("Empty math call argument");
      }
       if (this.startsWith("..")) {
        throw this.error("Spread arguments with .. are evaluator-dependent and unsupported");
      }
       const namedName = this.peekNamedArg();
       if (namedName) {
        this.index += namedName.length;
        this.skipSpaces();
        this.expect(":");
        const value = this.parseExpression(new Set([",", ";", ")"]));
        named.push({ name: namedName, value });
      } else {
        rows[rows.length - 1].push(this.parseExpression(new Set([",", ";", ")"])));
      }
       this.skipSpaces();
       if (this.peek() === ",") {
        this.index += 1;
        continue;
      }
       if (this.peek() === ";") {
        this.index += 1;
        rows.push([]);
        continue;
      }
       if (this.peek() === ")") {
        break;
      }
       throw this.error("Expected ',', ';', or ')' in math call arguments");
    }
     return {
      rows: rows.filter((row) => row.length > 0),
      flat: rows.flat(),
      named,
    };
  }
   peekNamedArg() {
    const saved = this.index;
    this.skipSpaces();
     if (!isIdentifierStart(this.peek())) {
      this.index = saved;
      return null;
    }
     const name = this.readIdentifier();
    this.skipSpaces();
    const isNamed = this.peek() === ":";
    this.index = saved;
    return isNamed ? name : null;
  }
   parseScriptArgument() {
    this.skipSpaces();
     if (this.peek() === "(") {
      this.index += 1;
      const body = this.parseExpression(new Set([")"]));
      this.expect(")");
      return body;
    }
     if (this.peek() === "[") {
      this.index += 1;
      const body = this.parseExpression(new Set(["]"]));
      this.expect("]");
      return body;
    }
     if (this.peek() === "{") {
      this.index += 1;
      const body = this.parseExpression(new Set(["}"]));
      this.expect("}");
      return body;
    }
     return this.parseAtom();
  }
   parseDelimited(open, close, latexOpen, latexClose) {
    this.expect(open);
    const body = this.parseExpression(new Set([close]));
    this.expect(close);
    return `${latexOpen}${body}${latexClose}`;
  }
   parseString() {
    this.expect('"');
    let value = "";
     while (!this.isEnd() && this.peek() !== '"') {
      value += this.peek();
      this.index += 1;
    }
     this.expect('"');
    return `\\text{${escapeText(value)}}`;
  }
   parseOperator() {
    const char = this.peek();
     if ("+-=*<>|,!".includes(char)) {
      this.index += 1;
      return operatorToLatex(char);
    }
     return null;
  }
   expect(char) {
    this.skipSpaces();
     if (this.peek() !== char) {
      throw this.error(`Expected '${char}'`);
    }
     this.index += 1;
  }
   readIdentifier() {
    const start = this.index;
    let previousWasDot = false;
     while (!this.isEnd()) {
      const char = this.peek();
       if (isIdentifierPart(char)) {
        previousWasDot = false;
        this.index += 1;
        continue;
      }
       if (char === "." && isIdentifierStart(this.input[this.index + 1]) && !previousWasDot) {
        previousWasDot = true;
        this.index += 1;
        continue;
      }
       break;
    }
     return this.input.slice(start, this.index);
  }
   readNumber() {
    const start = this.index;
    let sawDot = false;
     while (!this.isEnd()) {
      const char = this.peek();
       if (/[0-9]/.test(char)) {
        this.index += 1;
        continue;
      }
       if (char === "." && !sawDot && /[0-9]/.test(this.input[this.index + 1])) {
        sawDot = true;
        this.index += 1;
        continue;
      }
       break;
    }
     return this.input.slice(start, this.index);
  }
   skipSpaces() {
    while (!this.isEnd() && /\s/.test(this.peek())) {
      this.index += 1;
    }
  }
   startsWith(text) {
    return this.input.startsWith(text, this.index);
  }
   peek() {
    return this.input[this.index];
  }
   isEnd() {
    return this.index >= this.input.length;
  }
   error(message) {
    return new Error(`${message} at position ${this.index}`);
  }
}
 function requireArity(args, name, count, parser) {
  if (args.length !== count) {
    throw parser.error(`${name} expects ${count} argument${count === 1 ? "" : "s"}, got ${args.length}`);
  }
}
 function requireAtLeast(args, name, count, parser) {
  if (args.length < count) {
    throw parser.error(`${name} expects at least ${count} argument${count === 1 ? "" : "s"}, got ${args.length}`);
  }
}
 function validateMatrixRows(rows, name, parser) {
  if (rows.length === 0) {
    throw parser.error(`${name} expects at least one row`);
  }
   const width = rows[0].length;
   if (width === 0) {
    throw parser.error(`${name} rows cannot be empty`);
  }
   for (const row of rows) {
    if (row.length !== width) {
      throw parser.error(`${name} rows must have consistent widths`);
    }
  }
}
 function matrix(environment, rows) {
  return `\\begin{${environment}} ${rows.map((row) => row.join(" & ")).join(" \\\\ ")} \\end{${environment}}`;
}
 function joinParts(parts) {
  return parts.filter(Boolean).join(" ").replace(/\s+([,;])/g, "$1");
}
 function textFallback(value) {
  return `\\text{${escapeLatexText(value)}}`;
}
 function operatorToLatex(char) {
  if (char === "*") {
    return "\\cdot";
  }
   return char;
}
 function parenthesize(value) {
  return `(${value})`;
}
 function stripOuterParens(value) {
  if (value.startsWith("(") && value.endsWith(")")) {
    return value.slice(1, -1);
  }
   if (value.startsWith("\\left(") && value.endsWith("\\right)")) {
    return value.slice("\\left(".length, -"\\right)".length);
  }
   return value;
}
 function stripTextCommand(value) {
  const match = /^\\text\{(.*)\}$/.exec(value);
  const text = match ? match[1] : value;
   if (!/^[A-Za-z0-9 ]+$/.test(text)) {
    throw new Error("op expects a plain alphanumeric operator name");
  }
   return text;
}
 function escapeText(value) {
  return escapeLatexText(value);
}
 function escapeLatexText(value) {
  return value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([{}#$%&_])/g, "\\$1")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/~/g, "\\textasciitilde{}");
}
 function isDigitStart(char) {
  return /[0-9]/.test(char);
}
 function isIdentifierStart(char) {
  return /[A-Za-z]/.test(char);
}
 function isIdentifierPart(char) {
  return /[A-Za-z0-9]/.test(char);
}

export { typstMathToLatex }
