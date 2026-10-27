import type { Goal } from "@/data/goals";

export default function GoalCard({ goal }: { goal: Goal }) {
  return (
    <a
      href={`#services`}
      className="group flex flex-col items-start gap-3 rounded-3xl border border-plum-900/10 bg-white/60 p-6 text-start transition-all duration-200 hover:-translate-y-1 hover:border-plum-700/40 hover:shadow-lg hover:shadow-plum-900/5"
    >
      <span className="text-3xl" aria-hidden="true">
        {goal.emoji}
      </span>
      <h3 className="font-display text-lg font-bold text-ink">{goal.title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{goal.description}</p>
      <span className="mt-1 text-sm font-semibold text-plum-700 group-hover:underline">
        اعرفي أكتر
      </span>
    </a>
  );
}
