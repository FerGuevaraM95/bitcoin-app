import fetch from 'isomorphic-unfetch';

import MasterPage from '../components/MasterPage';
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';

const Index = (props) => (
    
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Price
                    price={props.priceBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="mb-4">Noticias sobre Bitcoin</h2>
                <News
                    news={props.news}
                />
            </div>
            <div className="col-md-4">
                <h2 className="mb-4">Próximos Eventos</h2>
                <Events
                    events={props.events}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=ed71b5000a284dab9f366e0dd103b290&language=es');
    const events = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=F7PEFH4RCAR2BORPH4ZU');

    const resPrice = await price.json();
    const resNews = await news.json();
    const resEvents = await events.json();

    return {
        priceBitcoin: resPrice.data.quotes.USD,
        news: resNews.articles,
        events: resEvents.events
    }
}

export default Index;