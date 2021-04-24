let form = document.getElementById("transaction-form")
form.submit = (e) => {
    console.log(e.target)
    console.log(e.target["transaction-type"].value)
    console.log(e.target.amount.value)

    e.preventDefault()
}  
