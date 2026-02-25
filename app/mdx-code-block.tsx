import { isValidElement, type HTMLAttributes, type ReactNode } from "react";

type MdxPreProps = HTMLAttributes<HTMLPreElement> & {
  children?: ReactNode;
};

type TokenType = "plain" | "keyword" | "string" | "number" | "comment" | "operator";
type Token = { text: string; type: TokenType };

const keywordGroups: Record<string, Set<string>> = {
  lua: new Set([
    "function",
    "local",
    "if",
    "then",
    "elseif",
    "else",
    "end",
    "for",
    "in",
    "while",
    "do",
    "return",
    "and",
    "or",
    "not",
    "true",
    "false",
    "nil",
  ]),
  js: new Set([
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "switch",
    "case",
    "for",
    "while",
    "true",
    "false",
    "null",
    "undefined",
    "async",
    "await",
    "new",
    "import",
    "from",
    "export",
    "default",
  ]),
  ts: new Set([
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "switch",
    "case",
    "for",
    "while",
    "true",
    "false",
    "null",
    "undefined",
    "async",
    "await",
    "new",
    "import",
    "from",
    "export",
    "default",
    "type",
    "interface",
    "extends",
    "implements",
  ]),
  json: new Set(["true", "false", "null"]),
  bash: new Set(["if", "then", "fi", "for", "do", "done", "while", "case", "esac", "function", "export"]),
  sh: new Set(["if", "then", "fi", "for", "do", "done", "while", "case", "esac", "function", "export"]),
};

const languageLabels: Record<string, string> = {
  lua: "LUA",
  js: "JAVASCRIPT",
  ts: "TYPESCRIPT",
  json: "JSON",
  bash: "BASH",
  sh: "SHELL",
};

function extractCodePayload(children: ReactNode): { language: string; rawCode: string } | null {
  if (!isValidElement(children) || children.type !== "code") {
    return null;
  }

  const props = children.props as { className?: string; children?: ReactNode };
  const languageMatch = /language-([\w-]+)/.exec(props.className ?? "");
  const language = (languageMatch?.[1] ?? "text").toLowerCase();

  const rawCode =
    typeof props.children === "string"
      ? props.children
      : Array.isArray(props.children)
        ? props.children.join("")
        : "";

  return { language, rawCode: rawCode.replace(/\n$/, "") };
}

function splitComment(line: string, language: string): { codePart: string; commentPart: string | null } {
  const marker =
    language === "lua"
      ? "--"
      : language === "js" || language === "ts"
        ? "//"
        : language === "bash" || language === "sh"
          ? "#"
          : null;

  if (!marker) {
    return { codePart: line, commentPart: null };
  }

  const markerIndex = line.indexOf(marker);
  if (markerIndex === -1) {
    return { codePart: line, commentPart: null };
  }

  return {
    codePart: line.slice(0, markerIndex),
    commentPart: line.slice(markerIndex),
  };
}

function tokenizeCodeSegment(segment: string, language: string): Token[] {
  const tokens: Token[] = [];
  const keywordSet = keywordGroups[language] ?? new Set<string>();
  const regex = /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][\w]*\b|[{}()[\].,;:+\-*/%!=<>|&^~?]+)/g;

  let lastIndex = 0;

  for (const match of segment.matchAll(regex)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({ text: segment.slice(lastIndex, index), type: "plain" });
    }

    let tokenType: TokenType = "plain";

    if (/^["'`]/.test(value)) {
      tokenType = "string";
    } else if (/^\d/.test(value)) {
      tokenType = "number";
    } else if (/^[A-Za-z_]/.test(value) && keywordSet.has(value)) {
      tokenType = "keyword";
    } else if (/^[{}()[\].,;:+\-*/%!=<>|&^~?]+$/.test(value)) {
      tokenType = "operator";
    }

    tokens.push({ text: value, type: tokenType });
    lastIndex = index + value.length;
  }

  if (lastIndex < segment.length) {
    tokens.push({ text: segment.slice(lastIndex), type: "plain" });
  }

  return tokens;
}

function tokenizeLine(line: string, language: string): Token[] {
  const { codePart, commentPart } = splitComment(line, language);
  const tokens = tokenizeCodeSegment(codePart, language);

  if (commentPart) {
    tokens.push({ text: commentPart, type: "comment" });
  }

  return tokens.length > 0 ? tokens : [{ text: "", type: "plain" }];
}

export default function MdxCodeBlock(props: MdxPreProps) {
  const codePayload = extractCodePayload(props.children);

  if (!codePayload) {
    return <pre {...props} />;
  }

  const { language, rawCode } = codePayload;
  const lines = rawCode.split("\n");
  const languageLabel = languageLabels[language] ?? language.toUpperCase();

  return (
    <pre className={`mdx-code-block ${props.className ?? ""}`.trim()} data-language={languageLabel}>
      <code>
        {lines.map((line, lineIndex) => (
          <span key={`${lineIndex}-${line}`} className="code-line">
            {tokenizeLine(line, language).map((token, tokenIndex) => (
              <span key={`${lineIndex}-${tokenIndex}-${token.text}`} className={`tok-${token.type}`}>
                {token.text || "\u00A0"}
              </span>
            ))}
            {"\n"}
          </span>
        ))}
      </code>
    </pre>
  );
}

