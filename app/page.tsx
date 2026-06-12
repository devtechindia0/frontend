import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Whychoose from "./components/Whychoose";
import Footer from "./components/Footer";

async function getHomePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[slug][$eq]=home&populate=*`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data[0];
}

async function getSections(pageDocumentId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sections?filters[page][documentId][$eq]=${pageDocumentId}&sort=order:asc&populate=*`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data || [];
}

async function getNavigation() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigations?sort=order:asc`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage();
  return {
    title: page.meta_title,
    description: page.meta_description,
  };
}

export default async function Home() {
  const page = await getHomePage();
  const sections = await getSections(page.documentId);
  const navItems = await getNavigation();

  return (
    <main>
      {sections.map((section: any) => (
        <div key={section.id}>
          {section.section_type === "Hero" && (
            <Hero content={section.content} navItems={navItems} />
          )}

          {section.section_type === "About" && (
            <About content={section.content} />
          )}

           {section.section_type === "Approach" && (
            <Approach content={section.content} />
          )}

          {section.section_type === "Why Choose Us" && (
            <Whychoose content={section.content} />
          )}

          {section.section_type === "footer" && (
            <Footer content={section.content} />
          )}
        </div>
      ))}
    </main>
  );
}