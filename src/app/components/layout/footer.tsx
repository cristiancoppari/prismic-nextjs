import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { Logo } from "@/app/components/svg/logo";
import { Bounded } from "@/app/components/bounded";

export async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { navigation } = settings.data;

  return (
    <Bounded as="footer">
      <div className="flex flex-col items-center justify-between gap-6 font-body sm:flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} <a href="https://desarrolladorweb.com.ar">Desarrollador Web</a>
        </p>
        <nav>
          <ul className="flex">
            {navigation.map(({ link, label }, i) => (
              <li key={i}>
                <PrismicNextLink field={link} className="p-4">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
