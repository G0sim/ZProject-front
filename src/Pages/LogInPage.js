import {Top} from "../Components/Top";
import {LogInForm} from "../Components/LogInComponents/LogInForm";

export function LogInPage() {
    return(
        <div>
            <div>
                <Top />
            </div>
            <div>
                <LogInForm />
            </div>
        </div>
    );
}