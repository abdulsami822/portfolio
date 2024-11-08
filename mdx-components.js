export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
    ...components,
  };
}
