export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-[13px] text-muted-foreground-subtle">
        <span>
          Дизайн и разработка{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground"
          >
            Sadbatya
          </a>
        </span>
        <span>Все права защищены {new Date().getFullYear()} ©</span>
      </div>
    </footer>
  );
}
