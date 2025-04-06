import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: 'NextBook',
  description: 'Documentation site built with NextBook',
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 

const navbar = (
  <Navbar
    logo={<div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '100%', marginTop: '0', paddingTop: '0' }}>
      <img src="/nextbook.svg" alt="NextBook" height="32" width="auto" style={{ maxHeight: '32px', verticalAlign: 'middle' }} />
      <span style={{ fontSize: '18px', lineHeight: '32px', verticalAlign: 'middle' }}>NextBook</span>
    </div>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © NextBook.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout

          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}