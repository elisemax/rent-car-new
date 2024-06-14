import { redirect } from "next/navigation";

export default function notFound() {
  // const t = useTranslations("NotFound");
  redirect("/cs");
  return (
    <html>
      <head>
        <title>404</title>
      </head>
      <body>
        <h1>404</h1>
        <p>Page not found</p>
      </body>
    </html>
  );
}
