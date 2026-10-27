export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

// Powers the services section. Add a new service by adding one object
// here — the grid renders from this array automatically.
export const services: Service[] = [
  {
    id: "gym-workouts",
    title: "برامج تمارين الجيم",
    description:
      "برنامج تدريب تصاعدي في الجيم مبني على مستواك وهدفك، مع بدائل لكل تمرين.",
    points: ["تمارين مقاومة مبرمجة", "تصاعد تدريجي في الشدة", "بدائل لكل تمرين", "متابعة أسبوعية"],
    image: "/images/services/gym-workouts.jpg",
  },
  {
    id: "home-workouts",
    title: "برامج تمارين البيت",
    description:
      "تدريب فعّال من غير ما تحتاجي جيم — بدون معدات أو بأدوات بسيطة.",
    points: ["بدون معدات أو بأدوات بسيطة", "دمبل وأربطة مقاومة", "مناسب لأي وقت متاح", "بدائل حسب المساحة"],
    image: "/images/services/home-workouts.jpg",
  },
  {
    id: "nutrition",
    title: "الأنظمة الغذائية",
    description:
      "نظام غذائي شخصي حسب هدفك — تخسيس، زيادة وزن، أو بناء عضل.",
    points: ["خطة وجبات عملية", "بدائل أكل متاحة", "إرشادات كمية الحصص", "تعديل حسب تقدمك"],
    image: "/images/services/nutrition.jpg",
  },
  {
    id: "coaching",
    title: "المتابعة الشخصية",
    description:
      "متابعة مستمرة لوزنك وقياساتك مع تعديل البرنامج أول بأول.",
    points: ["تتبع الوزن والقياسات", "تعديل التمرين والأكل", "دعم وتحفيز مستمر", "بدائل عند أي عائق"],
    image: "/images/services/coaching.jpg",
  },
];
