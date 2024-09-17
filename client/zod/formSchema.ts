import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is Required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  symbol: z
    .string()
    .min(1, { message: "Symbol is Required " })
    .max(8, { message: "Symbol cannot exceed 8 characters" }),
  image: z.string().min(1, { message: "Image is Required " }),
  description: z
    .string()
    .min(1, { message: "Description is Required" })
    .max(250, { message: "Description cannot exceed 250 characters" }),
  totalSupply: z
    .number()
    .int()
    .min(1, { message: "Total Supply is Required " }),

  revokeMintAuthority: z.boolean(),
  supplyBurned: z
    .number()
    .int()
    .nonnegative({ message: "Total Supply cannot be a negative number" }),
  useOfFunds: z
    .string()
    .min(1, { message: "Use Of Funds is Required" })
    .max(250, { message: "Use Of Funds cannot exceed 250 characters" }),
  solanaAddress: z.string().min(1, { message: "Solana Address is Required" }),
  releaseDate: z
    .date()
    .min(new Date(), { message: "Release date must be in the future" }),
  isAdvertised: z.boolean(),

  website: z.string().optional(),
  twitter: z.string().optional(),
  telegram: z.string().optional(),
});

//   image: z
//     .any()
//     .refine((files) => files?.length === 1, "Image is required.")
//     .refine(
//       (files) => files[0]?.size <= 5 * 1024 * 1024,
//       "Image must be less than 5MB."
//     ),
