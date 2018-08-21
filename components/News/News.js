import New from '../New';

const News = (props) => {
    return (
        <div className="row">
            {props.news.map(notice => (
                <New
                    key={notice.url}
                    notice={notice}
                />
            ))}
        </div>
    );
}
 
export default News;