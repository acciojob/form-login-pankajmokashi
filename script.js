function getFormvalue() {
    //Write your code here
	let form = document.querySelectorAll("form > input")
    let fname = form[0]
    let lname = form[1]

    alert(fname.value + " " + lname.value)
}