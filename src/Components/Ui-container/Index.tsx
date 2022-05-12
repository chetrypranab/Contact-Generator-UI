import "./Style.css";
interface cardProps {
    name: string;
    email: string;
    profileImg: string;
}
export default function Ui({ name, email, profileImg }: cardProps) {

    return (

        <div className="mainContainer">
            <div className="imageContainer">
                <img src={profileImg} />
            </div>

                <div className="name">

                <p >{name}</p>
                </div>

                <div className="email">

                <p >{email}</p>
                </div>
        </div>

    );
}