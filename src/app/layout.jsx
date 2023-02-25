import Header from '@/components/Header'
import React from 'react'
import './globals.css'
//? css kodları tüm sayfada aktif olsun diye layouta ekledim.
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tabs from '@/components/Tabs'




const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                <Tabs />
                {children}
            </body>
        </html>
    )
}

export default Layout


// Bu sayfa gereksiz kod tekrarı yapmamı önler yani tüm sayfalarda kullanacağım kodları tek bir ortak bir sayfada kullandım
//Bu sayfanın adı layout.js veya layout.jsx olmasa çalışmazdı.