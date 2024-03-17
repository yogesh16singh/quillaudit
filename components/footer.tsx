import { ECOSYSTEM_ITEMS, OTHER_SERVICES, PROGRAMMES, QUICK_LINKS, SERVICES_ITEMS } from "@/constants"
import Container from "@/components/container"
import { Icons } from "@/components/icons"
import Button from "@/components/button"
import Image from "next/image"

const Footer = () => {
  return (
    <Container className="px-4 space-y-8 py-6">
            <div className="flex items-center lg:justify-normal justify-center gap-x-2">
              <Icons.QuillLogoIcon />
              <div className="relative">
                <Icons.QuillNameLogoIcon className="" />
                <p className="text-xs absolute right-0 -bottom-4 text-white text-end leading-none font-light font-jost">
                  Making Web3 a safer place
                </p>
              </div>
            </div>

            {/* <div className="grid lg:grid-cols-5 grid-cols-2 h-full w-full gap-x-10"> */}
            <div className="custom-grid space-y-6">
              <div className="font-jost grid-item xl:mt-0 mt-6 text-white lg:order-none order-last flex flex-col justify-between">
                <div className="space-y-3">
                  <h6 className="footer-heading">More About Quill</h6>

                  <ul className="footer-list">
                    <li className="footer-child">About Us</li>
                    <li className="footer-child">FAQs</li>
                    <li className="footer-child">Blockchains We Audit</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h6 className="text-lg font-medium mt-4">Contact Us:</h6>
                  <ul className="footer-list">
                    <li className="font-sans footer-child italic font-light underline underline-offset-2 flex items-center gap-x-2">
                      <span className="inline-flex">
                        <Icons.EmailIcon />
                      </span>
                      audits@quillhash.com
                    </li>

                    <li className="font-sans footer-child italic font-light underline underline-offset-2 flex items-center gap-x-2">
                      <span className="inline-flex">
                        <Icons.TelegramIcon />
                      </span>
                      t.me/quillaudits
                    </li>
                  </ul>
                </div>

                <div className="my-4">
                  <h6 className="flex font-medium text-lg items-center gap-x-2">
                    <span>
                      <Icons.LocationIcon />
                    </span>
                    Our Location:
                  </h6>

                  <p className="text-base my-2 font-light text-white/80">
                    Office 104/105 Level 1, Emaar Square, Building 4 Sheikh
                    Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab
                    Emirates P.O box: 416654
                  </p>
                </div>
              </div>

              <div className="text-white space-y-3 grid-item">
                <h6 className="footer-heading">Audit Services</h6>
                <ul className="footer-list">
                  {SERVICES_ITEMS.map(({ name }, index) => (
                    <li className="footer-child" key={index}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-white grid-item space-y-3">
                <h6 className="footer-heading">Quill Ecosystem</h6>
                <ul className="footer-list">
                  {ECOSYSTEM_ITEMS.map(({ name }, index) => (
                    <li className="footer-child" key={index}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-white grid-item space-y-3">
                <h6 className="footer-heading">Other Services</h6>
                <ul className="footer-list">
                  {OTHER_SERVICES.map(({ name }, index) => (
                    <li className="footer-child" key={index}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-white grid-item space-y-3">
                <h6 className="footer-heading">Quick Links</h6>
                <ul className="footer-list">
                  {QUICK_LINKS.map(({ name }, index) => (
                    <li className="footer-child" key={index}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid-item space-y-4 my-4">
                <h6 className="footer-heading text-white">Our Programmes</h6>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                  {PROGRAMMES.map(({ name }, index) => (
                    <Button title={name} className="h-fit truncate w-full max-w-full" key={index}>
                      {name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-8 justify-between lg:items-center">
              <div className="flex lg:max-w-fit max-w-lg lg:mx-0 mx-auto gap-x-8 items-center justify-between w-full">
                <Image
                  src="/assets/images/footer-logo-1.png"
                  alt="Security logo"
                  height={32}
                  width={190}
                />

                <Image
                  src="/assets/images/footer-logo-2.png"
                  alt="Security logo"
                  height={32}
                  width={190}
                />
              </div>

              <div className="flex gap-x-4 sm:gap-x-8 items-center lg:w-fit max-w-lg lg:mx-0 mx-auto justify-between w-full">
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.TwitterIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.LinkedInIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.TelegramIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.RedditIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.MediumIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.DiscordIcon /></span>
                <span className="cursor-pointer opacity-80 transition-opacity duration-200 hover:opacity-100"><Icons.YoutubeIcon /></span>
              </div>
            </div>

            <div className="flex font-jost md:flex-row border-white/40 flex-col border-t pt-4 mt-4 gap-3 justify-between items-center text-white">
              <p className="">All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
              <p className="order-first">Privacy Policy</p>
            </div>
          </Container>
  )
}
export default Footer