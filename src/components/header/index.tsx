import { LinkMap } from "@/linkmap";
import React from "react";
import "./style.css"

export default function Header(){
    return(
        <header className="header">
            {LinkMap.map((link) => (
                <a key={link.name} href={link.url}>{link.name}</a>
            ))}
        </header>
    )
}