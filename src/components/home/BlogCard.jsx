import '../../css/BlogCard.css';

export function BlogCard({tag, img, date, title, content}) {
    return(
        <div class="blog-card">
            <img class="blog-card-img-top" src={img} alt={title} />
            <div class="blog-card-body">
                <div className="blog-card-tag">
                    <small>{tag}</small>
                    <small>{date}</small>
                </div>
                <h6 class="blog-card-title" title={title}>{title}</h6>
                <p class="blog-card-text">{content}</p>
            </div>
        </div>
        
    )
}