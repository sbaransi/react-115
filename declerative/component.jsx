function User() {
    function handleClick() { console.log(3) }
    return <div>
        <h1>User: Eitan </h1>
        <span>JSON is better than XML</span>
        <button onClick={handleClick}> a</button>
        <span>He is using XML</span>
        <button onClick={handleClick}> b</button>
    </div>
}
function HeaderApp(props) {
    return <h1 style={{ color: props.color }} > This is main Header {props.index} </h1>
}
function User() {
    return <div >
        <h1 >User: Eitan </h1>
        <HeaderApp color={"red"} index={1} />
        <HeaderApp color={"green"} index={3} />
        <button onClick={() => { console.log(3) }}> a</button>
        <span>He is using XML</span>
        <button onClick={() => { console.log(3) }}> b</button>
    </div>
}

function User() {
    const handleClick = () => { }
    return <div onClick={handleClick}>
        <h1>User: Eitan </h1>
        <span>He is using XML</span>
    </div>
}

function MainReactApplication() {
    return <div>
        <User />
        <img />
    </div>
}

function Table() {
    <table>
        <tbody>
            <Row />
        </tbody>
    </table>
}
function Row() {
    return <><tr> bla bla</tr><tr> bla bla</tr></>
}

function getYumInstall() {
    return 1;
}
getYumInstall()