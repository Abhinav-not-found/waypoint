import { Check } from "lucide-react";

const ValueSection = () => (
  <section className="px-5 md:px-10 py-24 border-y">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-5">
        <p className="text-sm text-muted-foreground font-medium">
          LESS CHAOS. MORE CLARITY.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Great work starts with a clear direction.
        </h2>
      </div>

      <div className="space-y-5">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Managing a team shouldn't mean juggling spreadsheets, endless
          messages and disconnected tools. Waypoint gives your team a
          shared space to organise work and stay aligned.
        </p>

        <div className="space-y-3">
          {[
            "Keep projects and tasks organised",
            "Give everyone a clear sense of ownership",
            "See progress without chasing updates",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <Check size={17} className="text-foreground" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ValueSection