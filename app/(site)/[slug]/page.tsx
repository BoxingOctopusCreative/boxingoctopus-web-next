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
            <div className="flex justify-end text-6xl">
                <div className="flex justify-end text-6xl">
                    <h2>{page.title}</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center">
                    <Image src={page.image} alt={page.title} width={400} height={400} className="rounded-full" />
                </div>
                <div className="flex justify-normal text-xl">
                    <PortableText value={page.content} />
                </div>
            </div>
        </>
    )
}