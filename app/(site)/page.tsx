import Image from "next/image"

export default async function Home() {

  const logoUrl = "https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/Logo%20White.png"
  return (
    <div className="flex align-middle justify-between">
      <Image src={logoUrl} alt="Boxing Octopus Creative" width={400} height={400} />
      <h1 className="text-8xl p-4 mt-6 font-extrabold">
        Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles
      </h1>
    </div>
  )

}
