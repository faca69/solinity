"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../zod/formSchema";
import { useMutation } from "@tanstack/react-query";
import Spinner from "./Spinner";
import {
  FormField,
  Form,
  FormItem,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Label } from "./ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import { handleImageChange } from "@/common/helper-functions/handleImageChange";
import { Textarea } from "./ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { IconCalendar } from "@tabler/icons-react";
import { TimePicker } from "./ui/time-picker/time-picker";
import { Calendar } from "./ui/calendar";
import parseNumber from "@/common/helper-functions/parseNumber";
import { useEffect, useState } from "react";
import { createCharge } from "@/coinbase/chargeGenerator";
import CustomHeadingOne from "./CustomHeadingOne";

export default function ClientCreatePresalePage() {
  const [hostedUrl, setHostedUrl] = useState("");

  useEffect(() => {
    const fetchChargeData = async () => {
      try {
        const chargeData = await createCharge();
        if (chargeData && chargeData.data && chargeData.data.hosted_url) {
          setHostedUrl(chargeData.data.hosted_url);
        }
      } catch (error) {
        console.error("Error fetching charge data:");
      }
    };

    fetchChargeData();
  }, []);

  // const handleClick = () => {
  //   if (hostedUrl) {
  //     window.location.href = hostedUrl;
  //   }
  // };

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      symbol: "",
      totalSupply: 0,
      revokeMintAuthority: false,
      supplyBurned: 0,
      useOfFunds: "",
      solanaAddress: "",
      releaseDate: new Date(),
      isAdvertised: false,
      website: "",
      twitter: "",
      telegram: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (newToken: z.infer<typeof formSchema>) => {
      const response = await fetch("https://solinity.onrender.com/api/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToken),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      const data = await response.json();
      return data;
    },
    onSuccess: () => {
      router.push("/tokens");
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });

  if (mutation.isPending) return <Spinner />;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // mutation.mutate(data);
    if (hostedUrl && data.isAdvertised) {
      // Redirect to the hosted URL for advertisement payment
      mutation.mutate(data);

      window.location.href = hostedUrl;
    } else {
      // Proceed with the mutation if not advertised or if it's off
      mutation.mutate(data);
    }
  };
  return (
    <div className="px-10 flex flex-col items-center ">
      <CustomHeadingOne>Create Presale</CustomHeadingOne>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="p-8 mb-10  rounded-2xl bg-gradient-to-br from-gray-900/60 to-transparent flex flex-col h-full shadow-emerald-700/70 shadow-inner w-full"
        >
          <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2 ">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Name</Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Name of the Token"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symbol"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Symbol</Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="Symbol of the Token"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Image</Label>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, field)}
                        placeholder="Upload an image"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Description</Label>
                    <FormControl>
                      <Textarea
                        rows={5}
                        {...field}
                        placeholder="Description of the Token"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalSupply"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Total Supply</Label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Total Supply of the Token"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseNumber(e.target.value))
                        }
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplyBurned"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Supply Burned</Label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="The supply planning to be burned"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseNumber(e.target.value))
                        }
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="useOfFunds"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Use Of Funds</Label>
                    <FormControl>
                      <Textarea
                        placeholder="How the funds for marketing are going to be used"
                        {...field}
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="solanaAddress"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Solana Presale Address</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Solana presale address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="revokeMintAuthority"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <div className="flex flex-col space-y-2">
                      <Label>Revoke Mint Authority</Label>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="ml-2"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="releaseDate"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label className="text-white">Release Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            className={cn(
                              "w-full justify-start text-left font-semibold bg-transparent border border-zinc-700 text-[#737373]",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP HH:mm")
                              : "Pick a date"}
                            <IconCalendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />

                        <div className="p3 border-t border-border">
                          <TimePicker
                            date={field.value}
                            setDate={field.onChange}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Website</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="https://yourwebsite.com"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Twitter</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="https://twitter.com/account"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telegram"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <Label>Telegram</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="https://t.me/channel"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="isAdvertised"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <div className="flex flex-col space-y-2">
                    <Label>ADVERTISE PRESALE</Label>
                    <FormDescription>
                      By enabling this you will be redirected to pay for a
                      presale advertisement
                    </FormDescription>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="ml-2"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {form.watch("isAdvertised") ? (
            <button
              className="p-[3px] relative"
              type="submit"
              // onClick={handleClick}
              disabled={!hostedUrl}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-lg " />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-bold w-full">
                Create Presale
              </div>
            </button>
          ) : (
            <button className="p-[3px] relative" type="submit">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-lg " />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-bold w-full">
                Create Presale
              </div>
            </button>
          )}
        </form>
      </Form>
    </div>
  );
}
