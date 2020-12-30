import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComp = (props) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>Corbin Taylor | Developer Portfolio</title>
            <meta name="keywords" content="Software Developer, Front End Developer, Developer, Portfolio, Lexington, North Carolina" />
            <meta name="description" content="Corbin Taylor, Front End Developer, Software Developer Portfolio" />
            <meta name="author" content="Corbin Taylor" />
            <link rel="icon" href={require('../assets/images/minasvg.svg')} />
        </Helmet>
    )
}

export default HelmetComp;