import '../globals.css'
import { getProjects, getPages } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
import Link from "next/link"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight:  ['400'],
  display: "swap",
})

export const metadata = {
  title:       'Boxing Octopus Creative',
  description: 'Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {

  const projects          = await getProjects()
  const pages             = await getPages()
  const logoUrl           = "https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/Logo%20White.png"
  const ghUrl             = "https://github.com/BoxingOctopusCreative"
  const merchUrl          = "https://tee.pub/lic/boxingoctopuscreative"
  const mastodonUrl       = "https://mastodon.social/@boxingoctopus"

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/icons/favicon-16x16.png" />
        <link rel="manifest" href="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/icons/site.webmanifest" />
      </head>
      <body className="bg-black">
        <div style={bebasNeue.style} className="container mx-auto text-white">
          <div className="max-w-7xl mx-auto items-center justify-between">
            <header>
              <nav className="flex p-4 text-3xl !font-medium ml-4 justify-between px-6">
                <Link href="/"><Image src={logoUrl} alt="Boxing Octopus Creative" width={75} height={75} /></Link>
                <Link href="/" className="p-1 mt-3 hover:scale-105">Home</Link>
                {pages.map((page) => (
                  <Link href={`/${page.slug}`} key={page._id} className="p-1">
                    <div className="text-3xl mt-3 font-extrabold hover:scale-105">{page.title}</div>
                  </Link>
                ))}
                <Link href="/projects" className="p-1 mt-3 hover:scale-105">Projects</Link>
                <Link href={ghUrl} className="p-1 mt-3 hover:scale-105" target="_blank">GitHub</Link>
                <Link href={merchUrl} className="p-1 mt-3 hover:scale-105" target="_blank">Merch</Link>
              </nav>
            </header>
            <main className="grid grid-cols-2 justify-between content-end">
              {children}
            </main>
            <footer className="flex p-1 mt-3 mb-3 text-2xl font-medium justify-center sticky bottom-0">
              <h1>
                Another Fine Boxing Octopus Creative Project | Built with <Link href="https://nextjs.org" target="_blank">Next.js</Link> | Copyright © 2023 Boxing Octopus Creative | Find Me On <Link href={mastodonUrl} target="_blank">Mastodon</Link>
              </h1>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )

}
