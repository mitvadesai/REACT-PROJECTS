import './card.css'
const Card = ({name , email ,mob, gender , education ,add ,age ,src}) => {
    return(
    
    <div class="card">
        <div class="fornt_side">
            <div class="profile_pic">
               <img src={src}/>
            </div>
            <div class="profile_text">
                <h3>NAME : {name}</h3>
                <h3>EMAIL : {email} </h3>
                <h3>AGE : {age}</h3>
                <h3>ADD : {add}</h3>
                <h3>MOB : {mob} </h3>
                <h3>GENDER : {gender}</h3>
                <h3>eduction : {education}</h3>
            </div>
        </div>
    </div>

    )
}
export default Card;