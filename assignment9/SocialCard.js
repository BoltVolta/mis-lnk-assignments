import './SocialCard.css'

const SocialCard = ({ userData }) => {
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <div class="card_image"><img src={userData.avatar} alt={''}></img></div>
                <div class="card_title">{userData.employment.title}</div>
                <div class="card_body">{userData.first_name}</div>
            </div>
            <div class="flip-card-back">
            <div class="card_title">{userData.first_name} {userData.last_name}</div>
            <div class="card_body">Email: {userData.email}</div>
            <div class="card_body">Job title: {userData.employment.title}</div>
            <div class="card_body">Best skill: {userData.employment.key_skill}</div>
            <div class="card_body">Phone number: {userData.phone_number}</div>
            <div class="card_body">DoB: {userData.date_of_birth}</div>
            <div class="card_body">Gender: {userData.gender}</div>
            </div>
            </div>
        </div>

    );
}

export default SocialCard
