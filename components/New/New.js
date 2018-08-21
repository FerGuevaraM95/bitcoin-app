
const New = (props) => {

    const { urlToImage, url, title, description, source } = props.notice

    let image;

    if(urlToImage !== '') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />
    } else {
        image = <p className="text-center my-5">Imagen No Disponible</p>
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-success d-block">
                        Leer Noticia
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default New;