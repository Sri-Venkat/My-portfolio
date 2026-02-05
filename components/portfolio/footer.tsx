import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Loosely designed in{" "}
        <Link
          href="https://www.figma.com/"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </Link>{" "}
        and coded in{" "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </Link>
        . Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com/"
          className="font-medium text-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </Link>
        .
      </p>
    </footer>
  );
}
