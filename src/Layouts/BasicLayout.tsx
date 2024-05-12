import React from 'react'
import { HeaderNav } from '../Components/HeaderNav'
import { Footer } from '../Components/Footer'

interface Props {
    headerContent?: any | undefined
    mainContent: any
    footerContent?: any
}

export const BasicLayout = ({
    headerContent,
    mainContent,
    footerContent,
}: Props) => {
    const defaultHeader = <HeaderNav />
    const defaultFooter = <Footer />

    return (
        <>
            <header className="py-4">
                {!headerContent ? defaultHeader : headerContent}
            </header>
            <main className="py-8 px-[4vw] min-h-screen ">{mainContent}</main>
            <footer>{!footerContent ? defaultFooter : footerContent}</footer>
        </>
    )
}
