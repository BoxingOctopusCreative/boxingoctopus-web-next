import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug)
    return (
        <>
            <div className="flex justify-end text-6xl">
                <h2>{page.title}</h2>
            </div>
            <div className="flex justify-normal text-xl">
                <PortableText value={page.content} />
            </div>
        </>
    )
}