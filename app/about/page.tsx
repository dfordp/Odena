import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* =========================
          HERO
      ========================== */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-4xl mx-auto leading-tight">
          A Collective of People Who Build From Curiosity,
          Not Obligation
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Odena is not a traditional organization.  
          We are a competitive, research-driven collective of engineers who
          experiment, prototype, and build because we love the craft not 
          because someone asked us to.  
          Every system we ship begins as someone’s obsession.
        </p>
      </section>

      {/* =========================
          ORIGIN + ETHOS
      ========================== */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">How Odena Works</h2>

        <p className="text-muted-foreground leading-relaxed text-lg">
          We don’t operate like a company with rigid structure.  
          Our people join from competitions, personal projects, research clubs, or
          late-night experiments that spiraled into real systems.  
          We bring first-principles thinking, debate everything, and treat every 
          problem like a sandbox to test an idea that shouldn’t work but somehow does.
        </p>

        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          Most of us met through hackathons, national contests, open-source
          contributions, and deep technical rabbit holes.  
          Everyone here is self-selected: if you love building, you belong.
        </p>
      </section>

      {/* =========================
          PEOPLE / CONTRIBUTORS
      ========================== */}
      <section className="py-20 px-6 bg-card/40 rounded-xl mx-4 sm:mx-8 lg:mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-10">
          People Building Odena
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We aren’t defined by titles.  
          These are people who build out of passion, curiosity, and competitive drive  
          contributors, researchers, engineers and tinkerers who treat problems as sports.
        </p>

        {/* People Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Dilpreet",
              role: "Systems & Zero-Shot Operators",
              img: "/profile-dummy.png",
              desc: "Works on distributed pipelines, data ranking systems, and adaptive model operators.",
            },
            {
              name: "Contributor 1",
              role: "Multimodal Embeddings",
              img: "/profile-dummy.png",
              desc: "Explores cross-domain embedding models and clustering architectures.",
            },
            {
              name: "Contributor 2",
              role: "Networks & Infra",
              img: "/profile-dummy.png",
              desc: "Builds high-throughput queue systems and dataflow routing graphs.",
            },
            {
              name: "Contributor 3",
              role: "Research Engineering",
              img: "/profile-dummy.png",
              desc: "Turns competition-grade prototypes into resilient production pipelines.",
            },
            {
              name: "Contributor 4",
              role: "Applied ML",
              img: "/profile-dummy.png",
              desc: "Works on generative ranking strategies and error-corrective operators.",
            },
            {
              name: "Contributor 5",
              role: "Experimentation",
              img: "/profile-dummy.png",
              desc: "Runs experiments, stress tests models, and builds unconventional tooling.",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition text-center"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">{person.name}</h3>
              <p className="text-primary text-sm">{person.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-muted-foreground">
          Want to contribute to Odena?  
          No applications, no formalities just reach out.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="block mt-6 mx-auto text-center px-6 py-3 rounded-full bg-primary text-primary-foreground w-max hover:opacity-90 transition cursor-pointer"
        >
          Contact Us
        </a>
      </section>

      {/* =========================
          WHY WE EXIST
      ========================== */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why We Build</h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Odena exists because the current state of data tooling is noisy, slow,
          and filled with teams duct-taping solutions that never scale.  
          We build alternative systems from scratch because we believe
          infrastructure should be as intelligent as the models it serves.
        </p>

        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          If you partner with us, you get people who care deeply about the
          craft.  
          If not someone else will, and they’ll move faster.
        </p>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold">Let’s Build Something Hard</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          If you have challenging datasets, scaling problems, or messy pipelines —
          we want to work with you.
        </p>

        <a
          href="mailto:team@odena.ai"
          className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition inline-block cursor-pointer"
        >
          Start a Conversation
        </a>
      </section>

    </div>
  );
}
