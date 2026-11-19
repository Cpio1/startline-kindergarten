import { File, FileImage, FileSpreadsheet, FileText, Folder, Presentation, type LucideIcon } from "lucide-react";
import type { DriveDocKind } from "@/lib/drive";

/** Icon, label and tint per Drive file type — shared by both layouts. */
export const docKinds: Record<DriveDocKind, { icon: LucideIcon; label: string; tint: string }> = {
  pdf: { icon: FileText, label: "PDF", tint: "bg-coral-soft text-coral-deep" },
  doc: { icon: FileText, label: "Документ", tint: "bg-blue-soft text-blue" },
  sheet: { icon: FileSpreadsheet, label: "Таблица", tint: "bg-[#e3f5e8] text-[#2f9a55]" },
  slides: { icon: Presentation, label: "Презентация", tint: "bg-sun-soft text-sun-deep" },
  image: { icon: FileImage, label: "Изображение", tint: "bg-blue-soft text-blue" },
  folder: { icon: Folder, label: "Папка", tint: "bg-sun-soft text-sun-deep" },
  file: { icon: File, label: "Файл", tint: "bg-blue-soft text-blue" },
};
