import CallToAction from "@/components/CallToAction";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">

      {/* =========================
          HERO
      ========================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl mx-auto">
          A Collective of People Who Build Out of Curiosity Not Obligation
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          We’re a competitive, research-driven group that prototypes, tests, and
          ships because we’re obsessed with the problems not because a roadmap says so.
        </p>
      </section>

      {/* =========================
          ETHOS
      ========================== */}
      <section className="py-12 sm:py-16 md:py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">How We Work</h2>

        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
          People join Odena through competitions, personal research, open-source work,
          or late-night experiments that spiraled into real systems.  
          There’s no hierarchy just people who can’t resist a difficult problem.
        </p>

        <p className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
          We debate, iterate, and build through first principles.  
          If something shouldn&apos;t work, we try it anyway.  
          If it works, we scale it.
        </p>
      </section>

      {/* =========================
          CONTRIBUTORS
      ========================== */}
      <section className="py-14 px-4 bg-card/40 rounded-xl mx-4 sm:mx-8 lg:mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
          People Behind Odena
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
          No titles. No formal org chart.  
          Just contributors, engineers, and researchers who treat building like a sport.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Dilpreet",
              role: "Systems & Zero-Shot Operators",
              img: "/profile-dummy.png",
              desc: "Distributed pipelines, adaptive operators, and ranking systems."
            },
            {
              name: "Contributor 1",
              role: "Multimodal Systems",
              img: "/profile-dummy.png",
              desc: "Cross-domain representations and clustering architectures."
            },
            {
              name: "Contributor 2",
              role: "Networks & Infra",
              img: "/profile-dummy.png",
              desc: "High-throughput queue meshes and routing graphs."
            },
            {
              name: "Contributor 3",
              role: "Research Engineering",
              img: "/profile-dummy.png",
              desc: "Turns prototypes into stable, scalable systems."
            },
            {
              name: "Contributor 4",
              role: "Applied ML",
              img: "/profile-dummy.png",
              desc: "Generative ranking strategies and error-corrective operators."
            },
            {
              name: "Contributor 5",
              role: "Experimentation",
              img: "/profile-dummy.png",
              desc: "Stress-tests models and builds unconventional tooling."
            },
          ].map((person, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition text-center"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={90}
                height={90}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium">{person.name}</h3>
              <p className="text-primary text-sm">{person.role}</p>
              <p className="text-sm text-muted-foreground mt-3">{person.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHY WE EXIST
      ========================== */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why We Build</h2>

        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Most data tooling is patchwork: brittle pipelines, slow retrieval, noisy signals.  
          We build the systems we wish existed fast, adaptive, and grounded in operator-level control.
        </p>

        <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          If you partner with us, you get people who care obsessively about the craft.  
          If not someone else will, and they’ll move faster.
        </p>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-semibold">Let’s Build Something Hard</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          If you have complex datasets, scaling problems, or messy pipelines we want to work with you.
        </p>
        <CallToAction/>
      </section>

    </div>
  );
}
