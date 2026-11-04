import { Hero, PainPoints, Services, Industries, SocialImpact } from "@/components/sections";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <PainPoints />
      <Services />
      <Industries />
      <SocialImpact />
    </main>
  );
}
