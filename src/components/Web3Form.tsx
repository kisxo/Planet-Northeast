const Web3Form = (props) => {

    return(
        <form  action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="430b8811-dbb1-4365-92a4-f27402574406"/>
             <input type="hidden" name={props.title} value={props.name}/>
            {props.children}
        </form>
    );
}

export default Web3Form;