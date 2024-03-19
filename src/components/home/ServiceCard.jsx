import '../../css/ServiceCard.css'

export function ServiceCard({count, title, content}){
    return(
        <div className="home-service-card">
            <h5 className="home-service-card-count">{ Number(count) < 10 ? `0${count}` : count }</h5>
            <h5 className="home-service-card-title">{title}</h5>
            <small className="home-service-card-text">{content}</small>
        </div>    
    )
}