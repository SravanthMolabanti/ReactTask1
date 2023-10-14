 function Fun()
{
    function my()
    {
        let x=document.getElementById("id1").value;
        //<h1>Header2</h1>
        document.getElementById("id2").innerHTML=x;
    }
    return(
        <div>
            <textarea id="id1"></textarea>
            <button type="button" onClick={my()}>Click here</button>
            <p id="id2"></p>
        </div>
    );
}

export default Fun;