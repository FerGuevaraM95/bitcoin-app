import Head from 'next/head';

import Navigation from '../Navigation';


const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css"/>
        </Head>

        <Navigation />
        {props.children}
    </div>
);

export default MasterPage;