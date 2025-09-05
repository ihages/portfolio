"use client";

import "./style.css";
import Breadcrumbs from "@/components/breadcrumbs";
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
