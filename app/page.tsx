import Header from "@/components/header";
import Hero from "@/components/Hero";
import TimelinePage from "@/components/Timeline";
import SkillsPage from "@/components/Skills";
import ContactPage from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      <main className="flex-1">
     
        <div id="home">
          <Hero />
        </div>

        
       
        <div id="timeline">
          <TimelinePage />
        </div>

     
        <div id="skills">
          <SkillsPage />
        </div>

       
        <div id="contact">
          <ContactPage />
        </div>
      </main>
    </div>
  );
}
