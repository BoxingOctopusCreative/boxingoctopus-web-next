import '../globals.css'
import { getProjects, getPages } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Bebas_Neue } from "@next/font/google"
import Link from "next/link"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400'],
  display: "swap",
})

export const metadata = {
  title: 'Boxing Octopus Creative',
  description: 'Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const projects    = await getProjects()
  const pages       = await getPages()
  const logoUrl     = "https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/Logo%20White.png"
  const ghUrl       = "https://github.com/BoxingOctopusCreative"
  const merchUrl    = "https://tee.pub/lic/boxingoctopuscreative"
  const mastodonUrl = "https://mastodon.social/@boxingoctopus"
  return (
    <html lang="en">
      <body className="bg-black">
        <div style={bebasNeue.style} className="text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex p-4 text-3xl font-bold">
              <Link href="/"><Image src={logoUrl} alt="Boxing Octopus Creative" width={75} height={75} /></Link>
              <Link href="/" className="p-1 mt-3 hover:scale-105">Home</Link>
              {pages.map((page) => (
                <Link href={`/${page.slug}`} key={page._id} className="p-1">
                  <div className="text-3xl mt-3 font-extrabold hover:scale-105">{page.title}</div>
                </Link>
              ))}
              <Link href={ghUrl} className="p-1 mt-3 hover:scale-105" target="_blank">GitHub</Link>
              <Link href={merchUrl} className="p-1 mt-3 hover:scale-105" target="_blank">Merch</Link>
            </div>
            <main>
              {children}
            </main>
            <div className="flex p-1 mt-3 mb-3 text-xl font-bold justify-center sticky bottom-0">
              <footer>
                <h1>
                  Another Fine Boxing Octopus Creative Project | Built with <Link href="https://nextjs.org" target="_blank">Next.js</Link> | Copyright © 2023 Boxing Octopus Creative | Find Me On <Link href={mastodonUrl} target="_blank">Mastodon</Link>
                </h1>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
