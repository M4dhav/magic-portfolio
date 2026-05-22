"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  period: string;
  description?: string | readonly string[];
  logoBackground?: string;
  links?: readonly {
    icon?: React.ReactNode;
    type: string;
    href: string;
  }[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description,
  logoBackground,
  links,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description || (links && links.length > 0)) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="block cursor-pointer" onClick={handleClick}>
      <Card className="flex">
        <div className="flex-none">
          <Avatar 
            className="border size-12 m-auto" 
            style={{ backgroundColor: logoBackground || "white" }}
          >
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {(description || (links && links.length > 0)) && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs sm:text-sm">{subtitle}</div>}
          </CardHeader>
          {(description || (links && links.length > 0)) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description && (
                Array.isArray(description) ? (
                  <div className="space-y-1">
                    {description.map((item, index) => (
                      <Markdown 
                        key={index}
                        className="prose-sm dark:prose-invert max-w-none text-sm text-muted-foreground [&>*]:text-xs [&>*]:sm:text-sm [&>*]:my-0 [&>ul]:ml-4 [&>ul]:list-disc [&>ol]:ml-4 [&>ol]:list-decimal [&_strong]:font-bold [&_strong]:text-black dark:[&_strong]:text-white [&_em]:not-italic [&_em]:text-black dark:[&_em]:text-white"
                      >
                        {item}
                      </Markdown>
                    ))}
                  </div>
                ) : (
                  <Markdown className="prose-sm dark:prose-invert text-sm text-muted-foreground whitespace-pre-line max-w-none [&>*]:text-xs [&>*]:sm:text-sm [&>*]:my-0 [&>ul]:ml-4 [&>ul]:list-disc [&>ol]:ml-4 [&>ol]:list-decimal [&_strong]:font-bold [&_strong]:text-black dark:[&_strong]:text-white [&_em]:not-italic [&_em]:text-black dark:[&_em]:text-white">
                    {description as string}
                  </Markdown>
                )
              )}
              {links && links.length > 0 && (
                <div className="mt-3 flex flex-row flex-wrap items-center gap-3">
                  {links.map((link, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.icon}
                        <span>{link.type}</span>
                      </a>
                      {idx < links.length - 1 && (
                        <span className="text-muted-foreground/50 text-xs">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
