import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Check, MoreHorizontal, Plus } from "lucide-react";
import { Link } from "react-router";

const CollaborationSection = () => (
  <section className="px-5 md:px-10 py-28">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground font-medium">
          WORK BETTER TOGETHER
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          One team. Shared goals. Clear responsibilities.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you're managing a team or working on an assigned task,
          Waypoint helps everyone understand what needs to be done and
          who's responsible for it.
        </p>

        <div className="space-y-4 pt-2">
          {[
            "Organise people into teams",
            "Assign work with clear ownership",
            "Manage roles and access",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-center text-sm">
              <div className="size-5 rounded-full border flex items-center justify-center">
                <Check size={12} />
              </div>
              {item}
            </div>
          ))}
        </div>

        <Link to="/register" className="inline-flex pt-2">
          <Button variant="outline" className="gap-2">
            Build your team
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      <div className="border rounded-xl p-5 md:p-7 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-muted-foreground">YOUR ORGANISATION</p>
            <h3 className="font-semibold text-lg mt-1">Product Team</h3>
          </div>
          <Button size="icon" variant="outline">
            <Plus size={16} />
          </Button>
        </div>

        <div className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Team members</span>
            <span className="text-xs text-muted-foreground">04 members</span>
          </div>

          {[
            { name: "Alex Morgan", role: "Manager", initials: "AM" },
            { name: "Sarah Chen", role: "Designer", initials: "SC" },
            { name: "James Wilson", role: "Developer", initials: "JW" },
            { name: "Emily Davis", role: "Developer", initials: "ED" },
          ].map((member) => (
            <div key={member.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <MoreHorizontal size={17} className="text-muted-foreground" />
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">Team activity</p>
            <span className="text-xs text-muted-foreground">Recent</span>
          </div>
          <div className="flex gap-3 items-start">
            <div className="size-7 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Check size={14} />
            </div>
            <div>
              <p className="text-sm">Sarah completed a task</p>
              <p className="text-xs text-muted-foreground mt-1">
                Website redesign · 2 hours ago
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="size-7 rounded-full bg-muted flex items-center justify-center shrink-0">
              <Plus size={14} />
            </div>
            <div>
              <p className="text-sm">Alex assigned a new task</p>
              <p className="text-xs text-muted-foreground mt-1">
                Mobile application · 4 hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default CollaborationSection