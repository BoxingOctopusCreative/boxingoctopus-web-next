import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: { project: string }
}

export default async function Project({params}: Props) {

    const slug    = params.project
    const project = await getProject(slug)

    return (
        <>
            <div className="flex justify-end text-6xl">
                <h2>{project.name}</h2>
            </div>
            <div className="flex justify-center">
                <Image src={project.image} alt={project.name} width={400} height={400} rounded-xl />
            </div>
            <div className="flex justify-normal text-xl">
                <PortableText value={project.content} />
            </div>
        </>
    )
}