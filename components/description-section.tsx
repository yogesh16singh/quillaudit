import Image from "next/image";
import Button from "@/components/button";
import SubContainer from "@/components/sub-container";
import {
  CONTENT_POINTS,
  MAIN_DESCRIPTION_HEADING,
  MAIN_DESCRIPTION_INTRO,
  PROCESS_ITEMS,
  REMEDIATION_ITEMS,
  SUB_HEADING_1,
  SUB_HEADING_1_CONTENT,
  SUB_HEADING_1_IMAGE,
  SUB_HEADING_2,
  SUB_HEADING_2_CONTENT,
  SUB_HEADING_2_IMAGE,
  SUB_HEADING_3,
  SUB_HEADING_3_CONTENT,
  SUB_HEADING_4,
  SUB_HEADING_4_CONTENT,
} from "@/constants";
import { cn } from "@/lib/utils";
import HeadDescriptionContainer from "@/components/head-description-container";
import { Icons } from "@/components/icons";

const DescriptionSection = () => {
  return (
    <>
      <div className="px-4 mt-12">
        <div className="p-4 block lg:hidden space-y-3 h-fit max-w-2xl w-full mx-auto flex-shrink-0 rounded-lg bg-white shadow-sm shadow-[#7184FD]/80 border-[#2D83EE]/60 border">
          <div className="">
            <h4 className="text-sm text-muted">Headquarters</h4>
            <p className="font-medium">Switzerland</p>
          </div>
          <div className="">
            <h4 className="text-sm text-muted">Chain</h4>
            <p className="font-medium">Pulse Blockchain</p>
          </div>
        </div>
      </div>

      <SubContainer className="px-4 mt-12 text-center max-w-4xl font-medium pr-4">
        <h3 className="text-primary font-jost text-4xl">
          {MAIN_DESCRIPTION_HEADING}
        </h3>
        <Button className="mt-4" tabIndex={2}>
          Request an Audit
        </Button>
      </SubContainer>

      <div className="mt-12">
        <SubContainer className="flex px-4 flex-col lg:flex-row gap-x-10">
          <div className="">
            <p>{MAIN_DESCRIPTION_INTRO}</p>

            <HeadDescriptionContainer
              heading={SUB_HEADING_1}
              content={SUB_HEADING_1_CONTENT}
              src={SUB_HEADING_1_IMAGE}
            />
            <HeadDescriptionContainer
              heading={SUB_HEADING_2}
              content={SUB_HEADING_2_CONTENT}
              src={SUB_HEADING_2_IMAGE}
            />

            <div className="">
              <h5 className="my-12 text-3xl font-semibold font-jost">
                CarpeDiem Pension&apos;s Journey Through our Audit Process
              </h5>

              <div className="">
                {CONTENT_POINTS.map((content, index) => (
                  <div className="" key={index}>
                    <h6 className="text-xl font-medium">
                      {index + 1}
                      {"."} {content.heading}
                    </h6>
                    <ul className="pl-8 pr-4 my-6">
                      {content.lists.map((item, idx) => (
                        <li
                          className={cn(
                            "my-3 w-full",
                            item.list.main !== null && "list-disc"
                          )}
                          key={idx}
                        >
                          {item.list.main}
                          {item.list.sublist.map((sub, index) => (
                            <p className="ml-6 my-3 relative" key={index}>
                              <span className="h-1 w-1 outline outline-1 -left-5 top-2.5 rounded-full flex-shrink-0 absolute"></span>
                              <span className="font-medium italic">
                                {sub.title}{" "}
                              </span>
                              {sub.description}
                            </p>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <HeadDescriptionContainer
              heading={SUB_HEADING_3}
              content={SUB_HEADING_3_CONTENT}
            />
            <HeadDescriptionContainer
              heading={SUB_HEADING_4}
              content={SUB_HEADING_4_CONTENT}
            />

            <ul className="">
              {PROCESS_ITEMS.map((item, index) => (
                <li className="px-2" key={index}>
                  <h6 className="text-base font-semibold">
                    {index + 1}
                    {". "}
                    {item.heading}
                  </h6>
                  <p className="ml-6 my-3 flex gap-x-3">
                    <span className="">a.</span>
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>

            <HeadDescriptionContainer
              heading="Remediation & Impact:"
              content="All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include"
            />

            <ul className="pl-10 space-y-3 pr-4">
              {REMEDIATION_ITEMS.map(({ item }, index) => (
                <li className="list-disc" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="my-5 w-full truncate">
              <strong>Embed this tweet :-</strong>{" "}
              <a
                href="#"
                className="text-sky-500 w-fit text-wrap leading-relaxed"
              >
                https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
              </a>
            </div>

            <div className="">
              <p>
                CDP smart contract audit revealed and fixed critical
                vulnerabilities, safeguarding funds and ensuring platform
                stability. This underscores the need for proactive security in
                blockchain projects, crucial for financial asset management.
                Through audits and issue resolution, CDP reinforces platform
                security, bolstering user trust.
              </p>
            </div>

            <div className="h-auto relative my-10 w-full rounded-lg overflow-hidden shadow-lg">
              <div className="sm:px-20 px-4 py-7 relative h-full before:absolute w-full before:h-[72%] sm:before:h-[75%] before:-z-10 before:w-full before:bg-gradient-to-br before:from-blue-950 before:via-blue-900 before:to-blue-800 before:top-0 before:left-0">
                <Icons.QuoteWhiteIcon className="absolute left-5 top-5" />
                <div className="flex sm:flex-row flex-row-reverse h-full sm:justify-between justify-end gap-x-5 pt-8 items-end w-full">
                  <div className="leading-relaxed h-full flex flex-col justify-between">
                    <div className="hidden sm:block">
                    <h6 className="font-jost text-4xl font-semibold text-white">
                      Sally Radley
                    </h6>
                    <p className="text-white text-lg font-light mt-1.5 font-jost">
                      WebGFi - CEO
                    </p>
                    </div>

                    <div className="sm:hidden block">
                      <h6 className="font-jost text-3xl font-semibold text-white">
                      Carpediem
                      </h6>
                      <p className="text-white text-lg font-light font-jost">TEAM</p>
                    </div>
                    <div className="flex mt-5 gap-x-3 items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icons.StarIcon key={index} />
                      ))}
                    </div>
                  </div>

                  <div className="sm:h-44 h-36 sm:w-44 w-36 relative overflow-hidden flex-shrink-0 aspect-square rounded-lg bg-blue-800">
                    <Image
                      src="/assets/images/user_image.png"
                      alt="User Image"
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:px-20 px-4 sm:py-4 py-0 pb-14 relative">
                <p className="font-jost">
                  “It felt like the auditing team was available within a short
                  timeframe, which was excellent. The auditing process looked
                  thorough, and I really appreciate the fact that you took time
                  to investigate GAS optimizations.”
                </p>
                <Icons.QuoteBlueIcon className="absolute right-5 bottom-5" />
              </div>
            </div>
          </div>

          <div className="p-4 hidden lg:block sticky top-24 order-none space-y-3 mb-10 max-w-80 h-fit w-full min-w-72 rounded-lg bg-white shadow-sm shadow-[#7184FD]/80 border-[#2D83EE]/60 border">
            <div className="">
              <h4 className="text-sm text-muted">Headquarters</h4>
              <p>Switzerland</p>
            </div>
            <div className="">
              <h4 className="text-sm text-muted">Chain</h4>
              <p>Pulse Blockchain</p>
            </div>
          </div>
        </SubContainer>
      </div>
    </>
  );
};
export default DescriptionSection;
