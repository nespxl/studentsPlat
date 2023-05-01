import PersonNavigation from "./PersonNavigation";
import Avatar from "./UI/Avatar";
import '../style/wrapperPersonPanel.css'

export default function WrapperPersonPanel() {
    return (
        <div className="person-container">
            <Avatar />
            <PersonNavigation />
        </div>
    )
}