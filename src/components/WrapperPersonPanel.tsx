import PersonNavigation from "./PersonNavigation";
import Avatar from "./UI/Avatar";
import '../style/wrapperPersonPanel.css'
import { IWrapperPersonPanel } from "../interface/app.interface";

export default function WrapperPersonPanel({option}: IWrapperPersonPanel) {
    return (
        <div className="person-container">
            <Avatar />
            <PersonNavigation option={option} />
        </div>
    )
}