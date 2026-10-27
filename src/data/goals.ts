export type Goal = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  serviceId: string;
};

// Powers the "إيه هدفك؟" section. Add or remove an entry here to change
// what appears — no component code needs to change.
export const goals: Goal[] = [
  {
    id: "weight-loss",
    title: "خسارة الوزن",
    description: "خطة أكل وتمرين تساعدك تخسري دهون وتحافظي على العضل.",
    emoji: "🔥",
    serviceId: "nutrition",
  },
  {
    id: "weight-gain",
    title: "زيادة الوزن",
    description: "سعرات وتمارين مدروسة لزيادة وزن صحية ومتناسقة.",
    emoji: "🍽️",
    serviceId: "nutrition",
  },
  {
    id: "toning",
    title: "شد وتناسق الجسم",
    description: "تمارين مقاومة تركّز على شكل الجسم ووضوح العضل.",
    emoji: "💪",
    serviceId: "gym-workouts",
  },
  {
    id: "muscle-building",
    title: "بناء العضلات",
    description: "برنامج تدريب تصاعدي مع تغذية تدعم بناء العضل.",
    emoji: "🏋️‍♀️",
    serviceId: "gym-workouts",
  },
  {
    id: "fitness",
    title: "تحسين اللياقة",
    description: "ترفعي مستوى لياقتك ونشاطك اليومي بشكل تدريجي وآمن.",
    emoji: "⚡",
    serviceId: "coaching",
  },
  {
    id: "home-workout",
    title: "التمرين في البيت",
    description: "برامج بدون أجهزة أو بأدوات بسيطة زي الدمبل والمقاومة.",
    emoji: "🏠",
    serviceId: "home-workouts",
  },
  {
    id: "gym-workout",
    title: "التمرين في الجيم",
    description: "برنامج جيم مصمم لمستواك مع بدائل لكل تمرين.",
    emoji: "🏢",
    serviceId: "gym-workouts",
  },
  {
    id: "nutrition-plan",
    title: "نظام غذائي",
    description: "نظام غذائي عملي يتناسب مع حياتك اليومية وهدفك.",
    emoji: "🥗",
    serviceId: "nutrition",
  },
];
