import Image from "next/image"

export default async function Home() {

  const logoUrl = "https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/Logo%20White.png"
  return (
    <>
      <Image src={logoUrl} alt="Boxing Octopus Creative" width={600} height={600} />
      <h1 className="flex text-8xl font-medium">
        Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles
      </h1>
    </>
  )

}
