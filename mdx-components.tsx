import type { MDXComponents } from "mdx/types";
import MdxCodeBlock from "./app/mdx-code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: MdxCodeBlock,
  };
}
