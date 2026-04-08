import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto w-full -mx-1 px-1">
        <table {...props}>{children}</table>
      </div>
    ),
    ...components,
  };
}
