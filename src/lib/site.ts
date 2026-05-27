export const site = {
  name: "ЄКОР УКРАЇНА",
  brand: "EKOR GROUP",
  legal: "ТОВ «Єкор Україна»",
  tagline: "Охоронно-детективна компанія",
  description:
    "Ліцензована охоронна компанія з 2020 року. Фізична, технічна, детективна охорона по всій Україні.",

  phone: "+38 (093) 783-14-66",
  phoneHref: "tel:+380937831466",
  email: "llc.sdc.ekor.ukraine@gmail.com",
  emailHref: "mailto:llc.sdc.ekor.ukraine@gmail.com",

  address: "м. Київ, вул. Олеся Гончара, 65",
  city: "Київ",
  country: "Україна",

  license: "Наказ МВС України про видачу ліцензії №548 від 21.07.2020 року",
  foundedYear: 2020,

  // Соц. посилання — `null` (поки немає реальних) ⇒ кнопка не рендериться
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
    telegram: null as string | null,
  },

  regions: [
    { slug: "kyiv", name: "Київ та область" },
    { slug: "vinnycya", name: "Вінниця та область" },
    { slug: "odesa", name: "Одеса та область" },
    { slug: "sumska", name: "Сумська область" },
    { slug: "chernihivska", name: "Чернігівська область" },
    { slug: "cherkaska", name: "Черкаська область" },
    { slug: "mykolaivska", name: "Миколаївська область" },
    { slug: "khersonska", name: "Херсонська область" },
    { slug: "rivnenska", name: "Рівненська область" },
    { slug: "khmelnytska", name: "Хмельницька область" },
    { slug: "lvivska", name: "Львівська область" },
    { slug: "zhytomyrska", name: "Житомирська область" },
  ],

  // home-hero stats — large numbers + progress fill share
  metrics: [
    { num: 260, sfx: "+", label: "об'єктів під охороною", fill: "75%" },
    { num: 700, sfx: "+", label: "охоронців", fill: "85%" },
    { num: 5, sfx: "+", label: "років середній контракт", fill: "60%" },
    { display: "24/7", label: "без вихідних", fill: "100%" },
    { num: 15, label: "хвилин реагування", fill: "45%" },
  ] as Array<{ num?: number; display?: string; sfx?: string; label: string; fill: string }>,

  clients: [
    { name: "Kernel", type: "Агрохолдинг" },
    { name: "Inagro", type: "Агро" },
    { name: "ACT", type: "Логістика" },
    { name: "Ukrmet", type: "Металургія" },
    { name: "MV Cargo", type: "Вантажі" },
  ],

  memberships: [
    "ASIS Ukraine",
    "Асоціація Професіоналів Корпоративної Безпеки України",
    "Всеукраїнська Асоціація Поліграфологів",
  ],
};

export const navMain = [
  { label: "Послуги", href: "/poslugy" },
  { label: "Рішення", href: "/rishennya/agrobiznes" },
  { label: "Кейси", href: "/kejsy" },
  { label: "Про нас", href: "/pro-kompaniyu" },
  { label: "Контакти", href: "/kontakty" },
];
