import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {

    const slug = params.slug
    const page = await getPage(slug)

    return (
        <>
            <div className="grid grid-cols-2 gap-4 w-full place-content-center">
                <div className="flex p-4 justify-end col-span-2 text-6xl w-full">{page.title}</div>
                <div className="p-4 justify-center">
                    <Image src={page.image} alt={page.title} width={400} height={400} className="rounded-full" />
                </div>
                <div className="flex p-4 justify-normal text-3xl"><PortableText value={page.content} /></div>
            </div>
        </>
    )
}