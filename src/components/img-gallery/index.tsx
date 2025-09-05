import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import "./style.css";

export type ImageProps = {
  title: string;
  description: string;
  src: string;
  url?: string;
  alt: string;
};

export type GalleryProps = {
  images: ImageProps[];
};

export function ImageGallery(props: GalleryProps) {
  return (
    <ScrollArea className="w-full rounded-md whitespace-nowrap border-[1px] border-secondary">
      <div className="flex w-max space-x-4 p-[20px] gap-[20px] bg-popover">
        {props.images.map((img) => (
          <div key={img.title}>
            <Image
              key={img.title}
              src={img.src}
              alt={img.alt}
              className="aspect-[3/4] h-fit w-fit object-cover"
              width={300}
              height={400}
              style={{
                maxWidth: "300px",
                maxHeight: "400px",
                ...(img.url ? { cursor: "pointer" } : {}),
              }}
              onClick={() => img.url && window.open(img.url, "_blank")}
            />
            <div className="caption flex flex-row gap-[5px]">
              {" "}
              <p className="text-foreground">{img.title}</p>
              <p className="text-popover-foreground/70">
                {img.description.substring(0, 100)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
