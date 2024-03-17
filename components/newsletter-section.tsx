import Image from "next/image";
import Button from "@/components/button";
import SubContainer from "@/components/sub-container";

const NewsletterSectionn = () => {
  return (
    <SubContainer className="lg:flex lg:justify-between gap-x-20 lg:items-center justify-center px-4 py-12">
      <div className="lg:w-1/2">
        <p className="uppercase text-lg font-semibold text-sky-600 hidden lg:block">
          Newsletter
        </p>
        <h6 className="lg:text-4xl lg:leading-relaxed lg:my-6 text-lg font-jost lg:text-primary text-center lg:text-start lg:font-semibold relative before:absolute lg:before:hidden before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-sky-500 before:h-[2px] before:w-[12%] leading-10 before:rounded-full">
          Security First News Letter by QuillAudits
        </h6>
        <p className="hidden lg:block">
          Subscribe for the most Exclusive Weekly security based newsletter and
          covering all the recent hacks up to date.
        </p>
      </div>
      <div className="flex-shrink-0 lg:w-1/2">
        <div className="relative aspect-video my-8 lg:my-0 max-w-md lg:max-w-xl mx-auto w-full">
          <Image
            src="/assets/images/newsletter_image.svg"
            alt="Newsletter Image"
            fill
            className="object-contain h-full w-full"
          />
        </div>

        <div className="max-w-md lg:hidden mx-auto text-center">
          <p>
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
            your Inbox. Explore our weekly newsletter:{" "}
            <span className="text-sky-500 font-semibold">HashingBits</span>.
            Stay updated on everything we’re publishing. Stand a step ahead.
          </p>
        </div>

        <div className="max-w-md mx-auto w-full my-8 lg:my-0 flex flex-col lg:flex-row lg:max-w-[480px] relative items-center space-y-4 lg:space-y-0">
          <input
            className="w-full px-3 h-14 lg:pr-52 rounded-md border-2 shadow-sm focus:outline-2 focus:outline placeholder:font-jost placeholder:font-light focus:outline-sky-600 focus:outline-offset-2"
            type="text"
            placeholder="vitalik@ethereum.org"
          />
          <Button className="text-lg mx-auto lg:absolute right-1">
            Subscribe
          </Button>
        </div>
      </div>
    </SubContainer>
  );
};
export default NewsletterSectionn;
