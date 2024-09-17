// Declare the module and its default export type
declare module "tailwindcss/lib/util/flattenColorPalette" {
  // Define the type of the function. Adjust the types as necessary for your use case.
  const flattenColorPalette: (colors: Record<string>) => Record<string, string>;
  export default flattenColorPalette;
}
