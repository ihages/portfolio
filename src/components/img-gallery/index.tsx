import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import "./style.css"

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
    <div className="horizontal-scroll">
      {props.images.map((img) => (
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
      ))}
    </div>
  );
}
