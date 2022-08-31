
import './form.css'
function ShowVid(props)
{
return(
    <iframe className={`${props.show}  "iframe"`  }width="auto" height="250" src={`${props.showVid1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
)


}

export default ShowVid;

