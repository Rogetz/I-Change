import { inter } from "./fonts"
import Link from "next/link"
import { NavComponents,ModifyingComponent} from "./nav"
import  "./ui/globals.css"
import { Provider } from "./providers"
import { Footer } from "./footer"


export const metadata = {
  title: 'I-Change',
  description: 'educate.inspire.innovate',
}

export default function RootLayout({children}) {
  
 return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-full min-h-screen overflow-x-hidden m-0 p-0  antialiased`}>
        <Provider>
          {/*use cslx for conditional styling for now use a manual state */}
          <NavComponents/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}
