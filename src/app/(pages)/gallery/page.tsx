"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { useEffect } from "react";
import { ImageGallery } from "@/components/img-gallery";


export default function Gallery() {
  return (
    <>
      <title>Ihages | Gallery</title>
      <meta
        name="description"
        content="Image gallery"
      />
      <div className="page-body">
        <Breadcrumbs />
        <ImageGallery
          images={[
            {
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },{
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },{
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },{
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },{
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },{
              title: "Placeholder",
              description: "This is a placeholder image",
              src: "https://wallpapers.com/images/hd/dark-plain-purple-rkouqp4mrlucwchv.jpg",
              alt: "A placeholder square of dark purple",
              url: "https://cultofthepartyparrot.com/"
            },
          ]}
        />
        
      </div>
    </>
  );
}
