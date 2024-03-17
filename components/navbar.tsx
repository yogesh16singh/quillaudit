"use client";

import Image from "next/image";
import Container from "@/components/container";
import { NAVBAR_ITEMS } from "@/constants";
import { Icons } from "./icons";
import Button from "./button";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const { scrolled } = useScrollTrigger(10);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 z-[9999]",
        scrolled ? "bg-blue-900/30 backdrop-blur-sm" : "bg-transparent",
        isOpen && "bg-black xl:bg-transparent"
      )}
    >
      <nav className="h-full">
        <Container className="h-full border-b border-white/30 w-full flex justify-between items-center px-4">
          <div className="flex items-center">
            <Image
              src="/assets/logos/logo.svg"
              alt="QuillAudit Logo"
              width={32}
              height={32}
            />
            <Image
              src="/assets/logos/logo_name.svg"
              alt="QuillAudit Name"
              width={110}
              height={32}
              className="ml-2.5 hidden md:block"
            />
          </div>

          <ul className="xl:flex hidden items-center gap-x-9 capitalize text-white">
            {NAVBAR_ITEMS.map((item) => (
              <li
                title={item.name}
                className="flex font-jost items-center text-lg cursor-pointer gap-2"
                key={item.name}
              >
                {item.name}
                {item.icon && (
                  <span className="inline-flex">
                    <Icons.DropdownIcon className="h-3 w-3" />
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-x-4 items-center">
            <Button className="w-auto" tabIndex={0}>
              Request An Audit
            </Button>

            <div
              onClick={(e) => {
                e.preventDefault();
                handleMenuToggle();
              }}
              className="xl:hidden cursor-pointer block"
            >
              {isOpen ? (
                <X className="text-white w-7 h-7" />
              ) : (
                <Icons.HamburgerIcon className="h-6 w-6" />
              )}
            </div>
          </div>
        </Container>
        <div
          className={cn(
            "h-[calc(100vh-80px)] flex items-center justify-center transition-transform xl:hidden w-full bg-black fixed z-[99]",
            isOpen ? "top-20 bottom-0" : "-translate-y-full bottom-0 inset-0"
          )}
        >
          <ul className="space-y-8">
            {NAVBAR_ITEMS.map(({ name }, index) => (
              <li
                className="text-white font-jost text-2xl text-center capitalize"
                key={index}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
