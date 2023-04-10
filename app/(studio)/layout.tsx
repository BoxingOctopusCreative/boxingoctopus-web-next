import '../globals.css'

export const metadata = {
  title: 'Boxing Octopus Creative',
  description: 'Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
