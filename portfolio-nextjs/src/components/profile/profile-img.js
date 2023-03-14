import Image from "next/image";

export default function ProfileImg({src}) {
    return <Image src={src} fill alt={src}/>;
};