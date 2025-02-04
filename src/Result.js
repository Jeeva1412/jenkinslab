
let result=' ';
function Result(props){
    const {Goal,term,onCorrect}=props;
    if (term == '')
    {
        result='';
    }
    else if(term > Goal){
        result = "Higher";
    }
    else if (term < Goal){
        result ="Lesser";
    }
    else if (term == Goal){
        result = "Yepppp! correct ";
        setTimeout(()=>{onCorrect()},1000)
        
    }
    else{   
        result = "Invalid entry"
    }
    return(
        <>
        <h2>Result:{result}</h2>
        </>
    );
}

export default Result;   