import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertise",
};

export default function AdvertisePage() {
  return (
    <main className="flex flex-col text-center px-10">
      <header>
        <h1 className="text-6xl font-bold py-11 text-center bg-gradient-to-b from-emerald-300 to-emerald-700 bg-clip-text text-transparent">
          Boost Your Presale&apos;s Visibility!
        </h1>
        <h2 className="text-4xl font-semibold bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent pb-16">
          Get your presale featured at the top of the list.
        </h2>
      </header>

      <section className="grid lg:grid-cols-2 gap-10">
        <article>
          <Tabs
            defaultValue="advertised"
            className=" flex flex-col justify-center"
          >
            <TabsList className="max-w-[700px] bg-gray-300/20 mb-7 mx-auto flex justify-center ">
              <TabsTrigger value="advertised" className="mx-auto font-bold">
                Advertised
              </TabsTrigger>
              <TabsTrigger value="free" className="mx-auto font-bold">
                Normal
              </TabsTrigger>
            </TabsList>
            <TabsContent value="advertised" className="mx-auto justify-center">
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br flex flex-col h-full w-[280px] shadow-yellow-300/50 shadow-inner from-yellow-300/40 to-transparent`}
              >
                <div className="flex justify-center mb-3">
                  <Image
                    className="h-[200px] w-[200px] rounded-xl object-cover"
                    src="https://unchainedcrypto.com/wp-content/uploads/2024/03/download.png"
                    alt="Demo token"
                    width={200}
                    height={200}
                    priority
                  />
                </div>

                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-2xl text-white truncate mb-1">
                      Demo Presale
                    </p>
                    <p className="font-medium text-lg text-gray-300 py-2">
                      $DMPSL
                    </p>
                  </div>
                  <div
                    className={`py-2 px-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-b from-yellow-400 to-yellow-600`}
                  >
                    <p>Released</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="free" className="mx-auto justify-center">
              <div
                className={`p-6 rounded-2xl bg-gradient-to-br flex flex-col h-full w-[280px] shadow-emerald-800/40 shadow-inner from-gray-900/80 to-transparent`}
              >
                <div className="flex justify-center mb-3">
                  <Image
                    className="h-[200px] w-[200px] rounded-xl object-cover"
                    src="https://unchainedcrypto.com/wp-content/uploads/2024/03/download.png"
                    alt="Demo token"
                    width={200}
                    height={200}
                    priority
                  />
                </div>

                <div className="text-center flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-2xl text-white truncate mb-1">
                      Demo Presale
                    </p>
                    <p className="font-medium text-lg text-gray-300 py-2">
                      $DMPSL
                    </p>
                  </div>
                  <div
                    className={`py-2 px-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-b from-emerald-400 to-emerald-700`}
                  >
                    <p>Released</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </article>

        <aside>
          <p className="font-semibold text-4xl pb-5">Limited Time Offer!</p>
          <p className="font-semibold text-xl text-gray-200">Standard Price</p>

          <p className="text-[70px] font-bold text-red-500 line-through text-center">
            $699
          </p>
          <p className="font-semibold text-4xl">Discounted Price</p>

          <p className="text-[100px] lg:text-[150px] font-bold bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent text-center">
            $299
          </p>
          <Link href="create-presale">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent font-semibold">
                Create Presale
              </div>
            </button>
          </Link>
        </aside>
      </section>

      <section className="py-20">
        <h2 className="text-6xl font-bold py-6">FAQ</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a presale?</AccordionTrigger>
            <AccordionContent>
              A presale is an event where tokens are sold to early investors
              before the official launch.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does advertising help?</AccordionTrigger>
            <AccordionContent>
              It increases visibility, attracting more investors and raising
              more funds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where do I pay?</AccordionTrigger>
            <AccordionContent>
              The payment is on the Create Presale Page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Will I get scammed?</AccordionTrigger>
            <AccordionContent>
              No! The transaction is with Ethereum through Coinbase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How much does it cost?</AccordionTrigger>
            <AccordionContent>
              The advertise option costs $399.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How long is the advertisement?</AccordionTrigger>
            <AccordionContent>
              The presale stays on top until it&apos;s released.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="py-10">
        <h2 className="text-6xl font-bold py-6">Donate</h2>
        <p className="text-2xl font-normal text-gray-200">
          Feel free to donate to the Devs, We will appreciate it a lot! Plus it
          will cover costs.
        </p>
        <Image
          src="https://utfs.io/f/XKop28EcnWa2S1KuxhiqQ0nDkmJFc6yEePZi1VrUlMvLgKGX"
          className="h-[200px] w-[200px] rounded-xl mx-auto my-10"
          alt="solana address"
          width={200}
          height={200}
        />
      </section>
    </main>
  );
}
