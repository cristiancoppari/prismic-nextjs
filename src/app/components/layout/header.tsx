import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { navigation } = settings.data;

  return (
    <header>
      <Link href="/">Home</Link>

      <nav>
        <ul>
          {navigation.map(({ link, label }, i) => (
            <li key={i}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
