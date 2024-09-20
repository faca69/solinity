declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (colors: Record<string>) => Record<string, string>;
  export default flattenColorPalette;
}
