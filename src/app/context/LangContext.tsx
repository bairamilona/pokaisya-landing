import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ru";

export const translations = {
  en: {
    nav: {
      brand: "POKAYCЯ",
      cta: "Plans",
    },
    hero: {
      overline: "Reflection App · 2026",
      word1: "LOOK",
      word2: "from another",
      word3: "angle.",
      sub: "A journal with prisms. Each prism is a way to see a situation differently, find meaning, and take the next step.",
      scrollBtn: "Explore",
    },
    showcase: {
      label: "The App",
      caption: "Ask a question — choose a prism — gain a new perspective",
    },
    triptych: {
      label: "Three Lenses",
      p1: "Reflection",
      p2: "Prism",
      p3: "Action",
      quote: `"Choose a lens.\nShift the angle.\nShift the meaning."`,
      quote2: `"Sometimes you need to rise above\nto see your own tracks."`,
    },
    prismFeed: {
      mechLabel: "How It Works",
      useCaseLabel: "Use Cases",
      items: [
        {
          num: "01",
          tag: "Reflection",
          title: "Describe — what's happening",
          body: "Just words, just a thought. No filters, no judgment. The app doesn't judge — it listens.",
          accent: "Step one",
        },
        {
          num: "02",
          tag: "Prism",
          title: "Choose a lens",
          body: "Values. Fears. Body. Future. Each prism asks one precise question — and shifts your angle of view.",
          accent: "Step two",
        },
        {
          num: "03",
          tag: "Action",
          title: "Take one step",
          body: "Not a to-do list. One intention. That is repentance — not regret, but movement.",
          accent: "Step three",
        },
        {
          num: "04",
          tag: "Use Case",
          title: "Quick reflection",
          body: "Three minutes at the end of the day. What happened — and what does it mean to you.",
          accent: "3 min",
        },
        {
          num: "05",
          tag: "Use Case",
          title: "Decision-making",
          body: "Different prisms reveal which values or fears lie behind a choice.",
          accent: "Clarity",
        },
        {
          num: "06",
          tag: "Use Case",
          title: "Emotional clarity",
          body: "Not 'what do I feel', but 'why does this matter' — and what you can do with it.",
          accent: "Depth",
        },
        {
          num: "07",
          tag: "Values",
          title: "Values & habits",
          body: "Check in: is what you do every day actually you?",
          accent: "Alignment",
        },
      ],
    },
    testimonials: {
      label: "Early Users",
      quotes: [
        {
          id: 1,
          text: "When I opened the 'Fears' prism, I understood something about myself I'd been putting off for years. Three minutes — and everything clicked.",
          name: "Anton",
          role: "designer",
        },
        {
          id: 2,
          text: "Finally something that doesn't pressure me with guilt — it just helps me see differently. I didn't expect that from an app.",
          name: "Masha",
          role: "product manager",
        },
        {
          id: 3,
          text: "Three minutes at the end of the day changed how I make decisions. Honestly — I didn't think that was possible.",
          name: "Kirill",
          role: "entrepreneur",
        },
      ],
    },
    privacy: {
      label: "Privacy",
      points: [
        { icon: "⊠", label: "Private by design", desc: "Your questions are never stored or shared with third parties" },
        { icon: "⚡", label: "Real-time AI", desc: "Every response traces back to actual scriptures, philosophies, and research — the AI compiles, not invents." },
        { icon: "⊕", label: "Cloud history", desc: "Pro & Premium plans sync your history across devices" },
      ],
    },
    cta: {
      label: "Plans & Download",
      h1: "Choose your",
      h2: "plan.",
      h3: "Start free, go deeper.",
      sub: "Download the app and pick a plan that fits. All data stays on your device.",
      placeholder: "your@email.com",
      btn: "Get Access",
      sent: "Perfect. We'll write when access opens.",
      storePre: "Available on",
    },
    pricing: {
      label: "Pricing",
      plans: [
        {
          id: "free",
          name: "Free",
          priceMonthly: "0",
          priceYearly: "0",
          periodMonthly: "/mo",
          periodYearly: "/yr",
          tag: "",
          desc: "Start reflecting today.",
          features: [
            "4 requests per day",
            "Up to 4 lenses at once",
            "Swap any 2 lenses once",
            "3-day history",
          ],
          cta: "Download Free",
        },
        {
          id: "pro",
          name: "Pro",
          priceMonthly: "4.99",
          priceYearly: "49.99",
          periodMonthly: "/mo",
          periodYearly: "/yr",
          tag: "Popular",
          desc: "All lenses, unlimited depth.",
          features: [
            "10 requests per day",
            "Up to 4 lenses at once",
            "Swap any lens once",
            "7-day history",
          ],
          cta: "Get Pro",
        },
        {
          id: "premium",
          name: "Premium",
          priceMonthly: "9.99",
          priceYearly: "99.99",
          periodMonthly: "/mo",
          periodYearly: "/yr",
          tag: "Best Value",
          desc: "The full experience.",
          features: [
            "Unlimited requests",
            "Up to 4 lenses at once",
            "Unlimited lens swaps",
            "30-day history",
          ],
          cta: "Get Premium",
        },
      ],
      storeNote: "Available on App Store & Google Play",
      annual: "Save 17% with annual billing",
    },
    footer: {
      statement: "See Differently",
      seeWord: "SEE",
      differentlyLetters: ["D","I","F","F","E","R","E","N","T","L","Y"] as string[],
      telegram: "Telegram",
      privacy: "Privacy",
      contact: "Contact",
    },
  },
  ru: {
    nav: {
      brand: "ПОКАЙСЯ",
      cta: "Тарифы",
    },
    hero: {
      overline: "Приложение для рефлексии · 2026",
      word1: "ПОД",
      word2: "ДРУГИМ",
      word3: "углом.",
      sub: "Дневник с призмами. Каждая призма — способ увидеть ситуацию иначе, найти смысл и сделать следующий шаг.",
      scrollBtn: "Смотреть дальше",
    },
    showcase: {
      label: "Приложение",
      caption: "Задай вопрос — выбери призму — получи другой угол зрения",
    },
    triptych: {
      label: "Три линзы",
      p1: "Отражение",
      p2: "Призма",
      p3: "Действие",
      quote: `«Выбери линзы.\nСмени угол.\nСмени значение.»`,
      quote2: `«Иногда нужно подняться выше,\nчтобы увидеть собственный след.»`,
    },
    prismFeed: {
      mechLabel: "Механика призм",
      useCaseLabel: "Для чего",
      items: [
        {
          num: "01",
          tag: "Отражение",
          title: "Опиши — что происходит",
          body: "Просто текст, просто мысль. Без фильтров, без оценок. Приложение не судит — оно слушает.",
          accent: "Шаг первый",
        },
        {
          num: "02",
          tag: "Призма",
          title: "Выбери линзу",
          body: "Ценности. Страхи. Тело. Будущее. Каждая призма задаёт один точный вопрос — и меняет угол зрения.",
          accent: "Шаг второй",
        },
        {
          num: "03",
          tag: "Действие",
          title: "Сделай один шаг",
          body: "Не список дел. Одно намерение. Это и есть покаяние — не сожаление, а движение.",
          accent: "Шаг третий",
        },
        {
          num: "04",
          tag: "Кейс",
          title: "Быстрая рефлексия",
          body: "Три минуты в конце дня. Что произошло — и что это значит для тебя лично.",
          accent: "3 мин",
        },
        {
          num: "05",
          tag: "Кейс",
          title: "Принятие решений",
          body: "Разные призмы показывают, какие ценности или страхи стоят за выбором.",
          accent: "Ясность",
        },
        {
          num: "06",
          tag: "Кейс",
          title: "Эмоциональная ясность",
          body: "Не «что я чувствую», а «почему это важно» — и что с этим можно сделать.",
          accent: "Глубина",
        },
        {
          num: "07",
          tag: "Ценности",
          title: "Ценности и привычки",
          body: "Проверь: то, что ты делаешь каждый день — это действительно ты?",
          accent: "Согласованность",
        },
      ],
    },
    testimonials: {
      label: "Первые пользователи",
      quotes: [
        {
          id: 1,
          text: "Когда я открыл призму «Страхи», понял кое-что о себе, что откладывал годами. Три минуты — и всё встало на место.",
          name: "Антон",
          role: "дизайнер",
        },
        {
          id: 2,
          text: "Наконец-то что-то, что не давит чувством вины, а просто помогает посмотреть иначе. Я не ожидал такого от приложения.",
          name: "Маша",
          role: "продакт-менеджер",
        },
        {
          id: 3,
          text: "Три минуты в конце дня изменили то, как я принимаю решения. Честно — не думал, что это возможно.",
          name: "Кирилл",
          role: "предприниматель",
        },
      ],
    },
    privacy: {
      label: "Приватность",
      points: [
        { icon: "⊠", label: "Приватность по умолчанию", desc: "Твои вопросы никогда не передаются третьим сторонам" },
        { icon: "⚡", label: "AI в реальном времени", desc: "Каждый ответ опирается на реальные источники — священные тексты, философию, исследования. ИИ компилирует, а не придумывает." },
        { icon: "⊕", label: "История в облаке", desc: "Планы Pro и Premium синхронизируют историю между устройствами" },
      ],
    },
    cta: {
      label: "Тарифы и загрузка",
      h1: "Выбери свой",
      h2: "тариф.",
      h3: "Начни бесплатно, иди глубже.",
      sub: "Скачай приложение и выбери подходящий тариф. Все данные остаются на устройстве.",
      placeholder: "твой@email.com",
      btn: "Получить доступ",
      sent: "Отлично. Мы напишем, как только откроем доступ.",
      storePre: "Доступно на",
    },
    pricing: {
      label: "Тарифы",
      plans: [
        {
          id: "free",
          name: "Бесплатно",
          priceMonthly: "0",
          priceYearly: "0",
          periodMonthly: "/мес",
          periodYearly: "/год",
          tag: "",
          desc: "Начни рефлексию сегодня.",
          features: [
            "4 запроса в день",
            "До 4 линз одновременно",
            "Замена любых 2 линз раз",
            "История 3 дня",
          ],
          cta: "Скачать",
        },
        {
          id: "pro",
          name: "Про",
          priceMonthly: "499",
          priceYearly: "4 990",
          periodMonthly: "/мес",
          periodYearly: "/год",
          tag: "Популярный",
          desc: "Больше запросов, больше глубины.",
          features: [
            "10 запросов в день",
            "До 4 линз одновременно",
            "Замена любой линзы раз",
            "История 7 дней",
          ],
          cta: "Оформить Про",
        },
        {
          id: "premium",
          name: "Премиум",
          priceMonthly: "999",
          priceYearly: "9 990",
          periodMonthly: "/мес",
          periodYearly: "/год",
          tag: "Лучшая цена",
          desc: "Полный опыт.",
          features: [
            "Безлимитные запросы",
            "До 4 линз одновременно",
            "Безлимитные замены линз",
            "История 30 дней",
          ],
          cta: "Оформить Премиум",
        },
      ],
      storeNote: "App Store и Google Play",
      annual: "Скидка 17% при оплате за год",
    },
    footer: {
      statement: "Шире взгляд",
      seeWord: "ШИРЕ",
      differentlyLetters: ["В","З","Г","Л","Я","Д"] as string[],
      telegram: "Telegram",
      privacy: "Приватность",
      contact: "Контакт",
    },
  },
} as const;

type TranslationsShape = typeof translations.en;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationsShape;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as TranslationsShape }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}