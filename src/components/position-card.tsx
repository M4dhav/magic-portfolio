import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  organization: string;
  position: string;
  description: string | readonly string[];
  start: string;
  end: string;
  logoUrl?: string;
  href?: string;
  links?: readonly {
    icon?: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function PositionCard({
  organization,
  position,
  description,
  start,
  end,
  logoUrl,
  href,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={organization} className="object-contain" />
          <AvatarFallback>{organization[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">{start} - {end}</time>
        {href ? (
          <Link href={href} target="_blank">
            <h2 className="font-semibold leading-none hover:underline">{organization}</h2>
          </Link>
        ) : (
          <h2 className="font-semibold leading-none">{organization}</h2>
        )}
        <p className="text-sm text-muted-foreground">{position}</p>
        {description && (
          <>
            {Array.isArray(description) ? (
              <div className="space-y-1">
                {description.map((item, index) => (
                  <Markdown
                    key={index}
                    className="prose-sm dark:prose-invert max-w-none text-sm text-muted-foreground [&>*]:text-xs [&>*]:sm:text-sm [&>*]:my-0 [&>ul]:ml-4 [&>ul]:list-disc [&>ol]:ml-4 [&>ol]:list-decimal"
                  >
                    {item}
                  </Markdown>
                ))}
              </div>
            ) : (
              <Markdown className="prose-sm dark:prose-invert text-sm text-muted-foreground whitespace-pre-line max-w-none [&>*]:text-xs [&>*]:sm:text-sm [&>*]:my-0 [&>ul]:ml-4 [&>ul]:list-disc [&>ol]:ml-4 [&>ol]:list-decimal">
                {description as string}
              </Markdown>
            )}
          </>
        )}
        {links && links.length > 0 && (
          <div className="mt-3 flex flex-row flex-wrap items-start gap-3">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.icon}
                <span>{link.type}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

// Keep old export for backwards compatibility
export const HackathonCard = PositionCard;
