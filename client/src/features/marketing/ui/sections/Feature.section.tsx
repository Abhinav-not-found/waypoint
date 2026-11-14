import { ArrowUpRight, CalendarDays, FolderKanban, ListTodo, MessageSquare, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FolderKanban,
      title: "Project management",
      description:
        "Create projects, organise work and keep every milestone within reach.",
      className: "md:col-span-2",
    },
    {
      icon: ListTodo,
      title: "Task management",
      description:
        "Break projects into manageable tasks and make responsibilities clear.",
    },
    {
      icon: Users,
      title: "Team management",
      description:
        "Bring your members together with structured roles and permissions.",
    },
    {
      icon: CalendarDays,
      title: "Deadline tracking",
      description:
        "Keep important dates visible and stay ahead of upcoming work.",
    },
    {
      icon: MessageSquare,
      title: "Team collaboration",
      description:
        "Keep communication connected to the work your team is doing.",
    },
  ];

  return (
    <section className="px-5 md:px-10 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm text-muted-foreground font-medium mb-4">
            BUILT FOR PRODUCTIVE TEAMS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything your team needs to move forward.
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            The essential tools to organise projects, manage responsibilities
            and bring your team together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`border rounded-xl p-7 min-h-52 flex flex-col justify-between hover:bg-muted/40 transition-colors ${feature.className ?? ""}`}
            >
              <div>
                <div className="size-10 border rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={19} />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
              <div className="flex justify-end">
                <ArrowUpRight size={18} className="text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection