import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComp = (props) => {
    return (
        <Helmet>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-S701LWSKDC"></script>
            <script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S701LWSKDC');
            `}
            </script>
            <meta charSet="utf-8" />
            <title>Corbin Taylor | Developer Portfolio</title>
            <meta name="keywords" content="Software Developer, Front End Developer, Developer, Portfolio, Lexington, North Carolina, Web Developer, Web Developer North Carolina, Front End Developer North Carolina, React Developer, Javascript Developer" />
            <meta name="description" content="Corbin Taylor, Front End Developer, Software Developer Portfolio" />
                <meta name="author" content="Corbin Taylor" />
                <link rel="icon" href={require('../assets/images/minasvg.svg')} />
        </Helmet>
    )
}

export default HelmetComp;