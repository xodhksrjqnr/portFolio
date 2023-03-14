import Image from "next/image";

export default function SkillImg({src}) {
    return <Image src={src} fill alt={src}/>;
};