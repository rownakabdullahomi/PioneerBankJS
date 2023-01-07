//Login Button Event Handler 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block";
})

//Deposit Button Event Handler 
const depositBtn = document.getElementById("addeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getConvertedFloatNumber("depositamount");
    
    updateSpanText("currentdeposit", depositNumber);
    updateSpanText("currentbalance", depositNumber);

    document.getElementById("depositamount").value = "";
    })
    //Withdraw Button Event Handler
    const withdrawBtn = document.getElementById("addwithdraw");
    withdrawBtn.addEventListener("click", function(){
        const withdrawNumber = getConvertedFloatNumber("withdrawamount");
        updateSpanText("currentwithdraw", withdrawNumber);
        updateSpanText("currentbalance", withdrawNumber * -1);

        document.getElementById("withdrawamount").value = "";
    })

    function getConvertedFloatNumber(id){
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
    }


    function updateSpanText(id, addedNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber + addedNumber;
        document.getElementById(id).innerText = totalAmount;
    }






    

