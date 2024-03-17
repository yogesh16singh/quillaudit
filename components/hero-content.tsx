import Image from "next/image"
import SubContainer from "@/components/sub-container"

const HeroContent = () => {
  return (
    <SubContainer className="">
          <div className="flex xl:flex-row lg:items-center lg:px-4 flex-col gap-8">
            <p className="px-4 w-fit lg:hidden text-white relative after:absolute after:h-[2px] after:w-[60%] font-jost after:bg-secondary after:bottom-0 after:left-4">Case Studies</p>
            <div className="h-96 flex flex-shrink-0 px-10 py-7 flex-col xl:max-w-lg xl:rounded-lg relative items-center justify-end w-full bg-gradient-to-r from-black via-black to-green-900 max-h-[28rem]">
              <div className="bg-white shadow-sm shadow-black rounded-lg h-20 w-[180px] flex justify-center items-center absolute xl:top-4 -bottom-10 right-5 xl:-right-[90px]">
                <div className="relative h-16 w-[150px]">
                  <Image
                    src="/assets/logos/CD-Pension-black.png"
                    alt="Hero CD Pension logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-full lg:w-80">
                <Image
                  src="/assets/logos/CD-Pension.png"
                  alt="Hero CD Pension logo"
                  fill
                  className="object-contain h-full w-full"
                />
              </div>

              <div className="float-end hidden lg:block">
                <p className="text-white text-base font-light">
                  Carpe Diem Pension, a blockchain-based retirement fund, offers
                  permanent payouts through CDP deposits, with a 4.32% annual
                  inflation claimable by depositors.
                </p>
              </div>
            </div>

            {/* Hero Content */}
            <div className="mt-12 lg:px-0 px-4">
              <h1 className="font-jost text-4xl font-medium text-white">
                Securing Trust : Boosting Security and Strengthening Trust at
                Carpe Diem Pension
              </h1>
              <p className="text-white leading-relaxed mt-8">
                QuillAudits enhances Carpe Diem Pension by addressing 33
                vulnerabilities on the Pulse blockchain, boosting security and
                user trust in digital pensions.
              </p>
            </div>
          </div>

          <div className="flex gap-x-3 mt-16 px-4">
            <p className="text-white/50 text-base">
              {`QuillAudits  --> Resources -->`}{" "}
              <span className="text-white">Case Studies</span>
            </p>
          </div>
        </SubContainer>
  )
}
export default HeroContent