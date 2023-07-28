import '../Css/Index.css';
export function Top() {

    return (
        <div className="main">
            <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/Resources/Images/logo.png'}/>
        </div>
    );
}