import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Advertise",
};

export default function AdvertisePage() {
  return (
    <div className="flex flex-col text-center px-10 ">
      <h1 className="text-6xl font-bold py-11 text-center bg-gradient-to-b from-emerald-300 to-emerald-700 bg-clip-text text-transparent">
        Boost Your Presale&apos;s Visibility!
      </h1>

      <h2 className="text-4xl font-semibold bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent">
        Get your presale featured at the top of the list.
      </h2>

      <div>
        <Tabs
          defaultValue="advertised"
          className="px-10 flex flex-col justify-center"
        >
          <TabsList className="max-w-[700px] bg-gray-300/20 mb-7 mx-auto flex justify-center ">
            <TabsTrigger value="advertised" className="mx-auto font-bold">
              Advertised
            </TabsTrigger>
            <TabsTrigger value="free" className="mx-auto font-bold">
              Normal
            </TabsTrigger>
          </TabsList>
          <TabsContent value="advertised" className="mx-auto">
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br flex flex-col h-full w-[280px]
                   shadow-yellow-300/50 shadow-inner from-yellow-300/40 to-transparent
              `}
            >
              <div className="flex justify-center mb-3">
                <Image
                  className="h-[200px] w-[200px] rounded-xl object-cover "
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
                  className={`py-2 px-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-b 
                       from-yellow-400 to-yellow-600
                   `}
                >
                  <p>Released</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="free" className="mx-auto">
            <div
              className={`p-6 rounded-2xl bg-gradient-to-br flex flex-col h-full w-[280px]
                 shadow-emerald-800/40 shadow-inner from-gray-900/80 to-transparent
              `}
            >
              <div className="flex justify-center mb-3">
                <Image
                  className="h-[200px] w-[200px] rounded-xl object-cover "
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
                  className={`py-2 px-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-b 
                        from-emerald-400 to-emerald-700
                   `}
                >
                  <p>Released</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
