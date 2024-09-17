import { fileToBase64 } from "./fileToBase64";
import { ControllerRenderProps } from "react-hook-form";

export const handleImageChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  field: any
) => {
  if (e.target.files?.length) {
    const file = e.target.files[0];
    try {
      const base64 = await fileToBase64(file);
      field.onChange(base64); // Use the field's onChange method directly
    } catch (error) {
      console.error("Error converting file to Base64:", error);
    }
  }
};
