import Image from "next/image";

export function useMDXComponents(components) {
  return {
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    ),
    ...components,
  };
}
