export const metadata = {
  title: 'Sanity Studio',
  description: 'Content Management System',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
