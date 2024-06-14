import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["cs", "en", "ru"],

  // Used when no locale matches
  defaultLocale: "cs",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(cs|en|ru)/:path*"],
};
