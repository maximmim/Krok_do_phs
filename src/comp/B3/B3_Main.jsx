import TypingTexts from "../Help_comps/typedtext";
import B3_phone from "./Phone";


const Main_content_B3 = () => {
    return ( 
    <main className="Maon_B3">
        <div className="Typing ">
            <div className="track-visibility"><TypingTexts text={"Панічна атака ? Як заспокоїти себе ?"} d={true}/></div>
            <p className="track-visibility">Заспокоїти себе можна за допомогою інтерактивних картор які допоможуть тобі у різних ситуаціях</p>
            
        </div>
        <B3_phone/>
    </main> );
 }
 
export default Main_content_B3;