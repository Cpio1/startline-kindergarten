import { Baby, Clock3, HeartHandshake, Languages, Leaf, MessagesSquare, Smile, Sun, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { site } from "./site";

/** Copy shared by the desktop and mobile compositions. */

export const hero = {
  title: "первый шаг к большому будущему",
  subtitle: "Место, где каждый день наполнен открытиями, заботой и радостью детства.",
  facts: [
    { icon: Baby, value: site.ages.display, label: "возраст детей" },
    { icon: Users, value: `${site.groups} группы`, label: "в детском саду" },
    { icon: UtensilsCrossed, value: `${site.meals}-разовое`, label: "питание" },
    { icon: Clock3, value: site.hours.display, label: "режим работы" },
  ] satisfies { icon: LucideIcon; value: string; label: string }[],
};

export const about = {
  eyebrow: "О нас",
  title: "Здесь начинается радостное детство",
  lead: "STARTLINE — детский сад, где ребёнок чувствует себя спокойно и уверенно, а каждый день приносит что-то новое.",
  text: "Мы создаём тёплую и комфортную среду, в которой малыши знакомятся с окружающим миром, учатся общаться, дружить и открывать собственные возможности — в своём темпе и с поддержкой взрослых.",
  values: [
    { icon: HeartHandshake, title: "Забота", text: "Внимание к каждому ребёнку" },
    { icon: Sun, title: "Комфорт", text: "Уютная и спокойная среда" },
    { icon: Leaf, title: "Мир вокруг", text: "Открытия каждый день" },
    { icon: MessagesSquare, title: "Общение", text: "Дружба и развитие" },
    { icon: Smile, title: "Радость", text: "Счастливое детство" },
  ] satisfies { icon: LucideIcon; title: string; text: string }[],
};

export type Feature = {
  icon: LucideIcon;
  value: string;
  title: string;
  text: string;
};

export const features: Feature[] = [
  { icon: Baby, value: "с 1,5 лет", title: "Принимаем малышей", text: "Дети от 1,5 до 6 лет — и самые маленькие, и дошкольники постарше." },
  { icon: Users, value: "3", title: "группы", text: "Ребёнок в кругу сверстников и в понятном ему ритме дня." },
  { icon: Languages, value: "RU", title: "Русский язык обучения", text: "Все занятия и общение в группах проходят на русском языке." },
  { icon: UtensilsCrossed, value: "5", title: "Пятиразовое питание", text: "Регулярное питание — часть заботы о ребёнке в течение дня." },
  { icon: Clock3, value: "08–18", title: "Удобный режим", text: "Детский сад работает с 08:00 до 18:00." },
];

export const groups = {
  eyebrow: "Наши группы",
  title: "Три группы — у каждого свой старт",
  text: "Мы учитываем возраст и особенности детей: малышам важны забота и спокойный ритм, а детям постарше — новые задачи, общение и самостоятельность.",
  note: "Названия групп и возрастной состав уточняйте по телефону — здесь указаны временные обозначения.",
  items: ["Группа 1", "Группа 2", "Группа 3"],
};

export const nutrition = {
  eyebrow: "Питание",
  title: "Забота в каждой детали",
  subtitle: "В нашем детском саду предусмотрено пятиразовое питание.",
  text: "Регулярные приёмы пищи помогают ребёнку чувствовать себя бодро и спокойно в течение всего дня.",
};

export const gallery = {
  eyebrow: "Фотогалерея",
  title: "Жизнь STARTLINE",
  text: "Моменты из жизни детского сада.",
  emptyText: "Мы готовим фотографии детского сада. А пока загляните в наш Instagram — там самые свежие новости.",
};

export const docs = {
  eyebrow: "Документы",
  title: "Официальные документы",
  text: "Здесь публикуются официальные документы детского сада. Файлы открываются в новой вкладке.",
  emptyTitle: "Раздел готовится к публикации",
  emptyText: "Документы появятся здесь, как только будут опубликованы. Если вам нужна информация уже сейчас — позвоните нам.",
};

export const finalCta = {
  title: "Подарите ребёнку счастливое начало!",
  text: "Позвоните нам — расскажем о детском саде и ответим на все вопросы.",
};

