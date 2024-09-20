interface Props {
  children: React.ReactNode;
}
export default function CustomHeadingOne({ children }: Props) {
  return (
    <h1 className="text-6xl font-bold py-11 text-center bg-gradient-to-b from-gray-100 to-gray-200 bg-clip-text text-transparent px-10">
      {children}
    </h1>
  );
}
