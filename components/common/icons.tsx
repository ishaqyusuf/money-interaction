import {
  Calendar,
  CalendarIcon,
  Check,
  ChevronDown,
  ChevronRightIcon,
  ChevronsUpDown,
  Loader2,
  Pencil,
  Plus,
  Slash,
  Trash,
} from "lucide-react";

export type IconType = keyof typeof Icons;
export const Icons = {
  plus: Plus,
  spinner: Loader2,
  edit: Pencil,
  delete: Trash,
  calendar: CalendarIcon,
  chevronDown: ChevronDown,
  chevronRightIcon: ChevronRightIcon,
  upDownChevron: ChevronsUpDown,
  checkMark: Check,
  slash: Slash,
  logo: ({ ...props }) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="11" fill="#4CAF50" />
      <path
        d="M12 8c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="#FFF"
      />
    </svg>
  ),
  logoSquare: ({ ...props }) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#4CAF50" rx="4" />

      <path
        d="M12 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM12 9h1v1h-1v-1zm1 2h-1v1h1v-1z"
        fill="#FFF"
      />
    </svg>
  ),
};
