function ProjectCard(props) {
    return (
        <div>
            <img
                src={props.src} 
                alt={props.title}
            />
            <h3>{props.title}</h3>
            <style jsx>{`
                h3 {
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export default ProjectCard;