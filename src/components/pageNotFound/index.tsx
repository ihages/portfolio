import Image from "next/image";

export default function PageNotFound () {
    return(
        <div className="page-body not-found">
        <Image 
        className="not-found-img"
            src="/portfolio/images/404Screen.png" 
            alt="could not find this page" 
            width={0} 
            height={0} 
            style={{ width: "50vw", aspectRatio: "1 / 1"}} 
            priority={true}
        /></div>
    )
}