import SectionHeading from "@/components/SectionHeading";
import GoalCard from "@/components/GoalCard";
import { goals } from "@/data/goals";

export default function Goals() {
  return (
    <section id="goals" className="bg-sand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="إيه هدفك؟"
          subtitle="روان هتساعدك بخطة مناسبة لهدفك أنتِ، مش برنامج واحد لكل الناس."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </section>
  );
}
