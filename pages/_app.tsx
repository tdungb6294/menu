import { AppProps } from 'next/app'
import '../styles/globals.css'
import { LanguageContext, PhoneContext } from '.'
import { useState } from 'react'

type CustomPageProps = {
}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
    const [language, setLanguage] = useState<string>('en')
    const [phone, setPhone] = useState<boolean>(true)
    
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" charSet="UTF-8" />
                <PhoneContext.Provider value={{phone, setPhone}}>
                    <LanguageContext.Provider value={{language, setLanguage}}>
                        <Component {...pageProps} />
                    </LanguageContext.Provider>
                </PhoneContext.Provider>
            
        </>
        
    )
}