import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  organization: string;
  position: string;
  description: string;
  start: string;
  end: string;
  logoUrl?: string;
  href?: string;
}

export function PositionCard({
  organization,
  position,
  description,
  start,
  end,
  logoUrl,
  href,
}: Props) {
  const content = (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={organization} className="object-contain" />
          <AvatarFallback>{organization[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">{start} - {end}</time>
        <h2 className="font-semibold leading-none">{organization}</h2>
        <p className="text-sm text-muted-foreground">{position}</p>
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground whitespace-pre-line">
            {description}
          </span>
        )}
      </div>
    </li>
  );

  return href ? (
    <Link href={href} target="_blank">
      {content}
    </Link>
  ) : (
    content
  );
}

// Keep old export for backwards compatibility
export const HackathonCard = PositionCard;
