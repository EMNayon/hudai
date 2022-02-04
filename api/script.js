function result(){
    var fname = document.getElementById('fname').value 
    var lname = document.getElementById('lname').value

    document.getElementById('result').innerText = fname + lname;
}