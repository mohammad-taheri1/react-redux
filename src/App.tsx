import SideBarMenu from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from "./types/types";
import { FcAdvertising } from "react-icons/fc";

const App = () => {
    const items:SideBarMenuItem[] = [
        { 
            id: '1',
            label: 'Salam',
            icon: FcAdvertising,
            url: "/",
        }
    ]

    const card: SideBarMenuCard = {
        id: 'card01',
        displayName: 'Mamad Taheri',
        title: 'Developer',
        photoUrl: '',
        url: '/',
    }
    return (
        <div>
            <SideBarMenu items={items} card={card} />
        </div>
    );
};

export default App;