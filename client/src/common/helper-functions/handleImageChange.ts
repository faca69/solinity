import { fileToBase64 } from "./fileToBase64";

interface Field {
  onChange: (value: string) => void;
}

export const handleImageChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  field: Field
) => {
  if (e.target.files?.length) {
    const file = e.target.files[0];
    try {
      const base64 = await fileToBase64(file);
      field.onChange(base64);
    } catch (error) {
      console.error("Error converting file to Base64:", error);
    }
  }
};
