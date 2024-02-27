"use client";

interface Props {
  children?;
}
export function Header({ children }: Props) {
  return (
    <header className="h-12 border-b flex">
      <div className="" id="bread-crumb"></div>
      <div className="flex-1"></div>
    </header>
  );
}
