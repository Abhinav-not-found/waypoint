import { FolderKanban, Target, Users, Zap } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create your organisation",
      description:
        "Set up your workspace and bring your team into one shared environment.",
      icon: Users,
    },
    {
      number: "02",
      title: "Build your projects",
      description:
        "Create projects around your goals and organise the work ahead.",
      icon: FolderKanban,
    },
    {
      number: "03",
      title: "Assign responsibilities",
      description:
        "Break work into tasks and give every team member clear ownership.",
      icon: Target,
    },
    {
      number: "04",
      title: "Track your progress",
      description:
        "Follow project progress and keep your team moving towards its goals.",
      icon: Zap,
    },
  ];

  return (
    <section className="px-5 md:px-10 py-28 border-y bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-muted-foreground font-medium mb-4">
            SIMPLE BY DESIGN
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            From planning to progress.
          </h2>
          <p className="text-muted-foreground mt-5">
            A straightforward workflow that keeps your entire organisation
            moving in the same direction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-mono">
                  / {step.number}
                </span>
                <step.icon size={20} className="text-muted-foreground" />
              </div>
              <div className="h-px bg-border" />
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection