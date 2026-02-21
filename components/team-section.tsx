import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Organizer",
    image: "/images/team/member-1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    image: "/images/team/member-2.jpg",
  },
  {
    name: "Liam Foster",
    role: "Sponsorship Lead",
    image: "/images/team/member-3.jpg",
  },
  {
    name: "Mei Lin",
    role: "Marketing & Design",
    image: "/images/team/member-4.jpg",
  },
  {
    name: "Omar Hassan",
    role: "Tech & Logistics",
    image: "/images/team/member-5.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Team
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Meet the Team
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The passionate teenagers behind Equinox Vancouver, working to
            create an unforgettable hackathon experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-lg md:h-40 md:w-40">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
