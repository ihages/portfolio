"use client";

import "./style.css"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Breadcrumbs(){

    const pathname = usePathname().replace("/", " ").trimStart();
    const pathlist = pathname.split("/");
    
    return(
         <Breadcrumb className="custom-breadcrumbs">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            {pathlist.map((crumb, index) => {
              // Build the full path up to the current crumb
              const fullPath = "/" + pathlist.slice(0, index + 1).join("/");
              
              return (
                <div className="breadcrumb-div" key={crumb}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link href={fullPath}>{crumb.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}</Link>
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
    )
}