import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Circle, FolderKanban, LayoutDashboard, ListTodo, MoreHorizontal, Plus, Users } from "lucide-react"

const ProductPreview = () => {
  const tasks = [
    { title: "Design landing page", status: "In progress", color: "bg-blue-500" },
    { title: "Implement authentication", status: "Completed", color: "bg-emerald-500" },
    { title: "Review project proposal", status: "Todo", color: "bg-zinc-500" },
  ];
  return (
    <div className="rounded-xl border bg-card overflow-hidden shadow-2xl">
      <div className="h-12 border-b flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded bg-foreground text-background flex items-center justify-center text-xs font-bold">
            W
          </div>
          <span className="font-semibold text-sm">Waypoint</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Circle size={15} />
          <MoreHorizontal size={18} />
        </div>
      </div>

      <div className="grid md:grid-cols-[190px_1fr] min-h-[420px]">
        <aside className="hidden md:block border-r p-4 space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-3">WORKSPACE</p>
            <div className="flex items-center gap-2 text-sm font-medium">
              <div className="size-7 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">
                A
              </div>
              Acme Studio
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-foreground">
              <LayoutDashboard size={16} />
              Overview
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FolderKanban size={16} />
              Projects
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ListTodo size={16} />
              My tasks
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={16} />
              Members
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground mb-3">PROJECTS</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Website redesign</p>
              <p>Mobile application</p>
              <p>Marketing campaign</p>
            </div>
          </div>
        </aside>

        <div className="p-5 md:p-8 space-y-7">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-muted-foreground">MONDAY, NOVEMBER 16</p>
              <h3 className="text-xl font-semibold mt-1">Good morning, Alex</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Here's what's happening with your workspace.
              </p>
            </div>
            <Button size="sm" className="hidden sm:flex gap-2">
              <Plus size={15} />
              New task
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Total projects", value: "12", icon: FolderKanban },
              { label: "Active tasks", value: "28", icon: ListTodo },
              { label: "Team members", value: "08", icon: Users },
            ].map((item) => (
              <div key={item.label} className="border rounded-lg p-3 md:p-4">
                <div className="flex justify-between items-center">
                  <item.icon size={17} className="text-muted-foreground" />
                </div>
                <p className="text-2xl font-semibold mt-3">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h4 className="text-sm font-semibold">Recent tasks</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Keep track of your team's work
                </p>
              </div>
              <MoreHorizontal size={18} className="text-muted-foreground" />
            </div>

            {tasks.map((task) => (
              <div
                key={task.title}
                className="flex items-center justify-between gap-3 p-4 border-b last:border-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Circle size={16} className="text-muted-foreground shrink-0" />
                  <span className="text-sm truncate">{task.title}</span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-2">
                  <span className={`size-2 rounded-full ${task.color}`} />
                  <span className="hidden sm:inline">{task.status}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Workspace overview</span>
            <span className="flex items-center gap-1">View all <ArrowRight size={13} /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview