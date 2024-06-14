"use client";
import { useState } from "react";
import { useMediaQuery } from "./func/useMediaQeury";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu as MenuIconLucide } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const t = useTranslations("IndexPage");
  const navItems = [
    t("nav.home"),
    t("nav.about"),
    t("nav.contact"),
    t("nav.services"),
  ];

  const languages = [
    { lang: t("languageOptions.czech"), label: "cs" },
    { lang: t("languageOptions.english"), label: "en" },
    { lang: t("languageOptions.russian"), label: "ru" },
  ];

  if (isDesktop) {
    return (
      <nav className="fixed mr-4 p-1 justify-between hidden gap-2 md:flex w-full shadow-lg shadow-zinc-800/5 bg-white/90 z-10">
        <div>
          {navItems.map((item, index) => (
            <Button key={index} variant="link">
              {item}
            </Button>
          ))}
        </div>
        <div className="flex items-center pr-4">
          <div>{t("companyName")}</div>
          <div className="pl-4">
            <Select
              defaultValue={
                languages.find((item) => item.label === pathname.split("/")[1])
                  ?.lang
              }
              onValueChange={(value) => {
                const lang = languages.find(
                  (item) => item.lang === value
                )?.label;
                const path = lang ? `/${lang}` : "/";
                router.push(path);
              }}
            >
              <SelectTrigger className="w-[110px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t("language")}</SelectLabel>
                  {languages.map((item) => (
                    <SelectItem key={item.label} value={item.lang}>
                      {item.lang}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed mr-4 p-1 gap-2 md:flex w-full bg-white/90 shadow-lg shadow-zinc-800/5 flex justify-between z-10">
      <div className="flex justify-between items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          {/* This button will trigger open the mobile sheet menu */}
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIconLucide />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <div className="flex flex-col items-start">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="link"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center pr-4">
        <div>{t("companyName")}</div>
        <div className="pl-4">
          <Select
            defaultValue={
              languages.find((item) => item.label === pathname.split("/")[1])
                ?.lang
            }
            onValueChange={(value) => {
              const lang = languages.find((item) => item.lang === value)?.label;
              const path = lang ? `/${lang}` : "/";
              router.push(path);
            }}
          >
            <SelectTrigger className="w-[110px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("language")}</SelectLabel>
                {languages.map((item) => (
                  <SelectItem key={item.label} value={item.lang}>
                    {item.lang}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
}
