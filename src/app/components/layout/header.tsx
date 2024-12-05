import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { Logo } from "@/app/components/svg/logo";
import { Bounded } from "@/app/components/bounded";
import Link from "next/link";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { navigation } = settings.data;

  return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/">
          <Logo />
        </Link>

        <nav>
          <ul className="flex">
            {navigation.map(({ link, label }, i) => (
              <li key={i}>
                <PrismicNextLink className="p-4" field={link}>
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
