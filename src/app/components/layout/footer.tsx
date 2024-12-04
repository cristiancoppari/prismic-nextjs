import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { navigation } = settings.data;

  return (
    <footer>
      <Link href="/">Home</Link>
      <p>
        &copy; {new Date().getFullYear()} <a href="https://desarrolladorweb.com.ar">Desarrollador Web</a>
      </p>
      <nav>
        <ul>
          {navigation.map(({ link, label }, i) => (
            <li key={i}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
