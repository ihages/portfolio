import { LinkMap } from "@/linkmap";
import React from "react";
import "./style.css"

export default function Footer(){
    return(
        <footer className="footer">
            {LinkMap.map((link) => (
                <a key={link.name} href={link.url}>{link.name}</a>
            ))}
        </footer>
    )
}