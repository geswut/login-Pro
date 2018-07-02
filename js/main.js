var users = [
  {
    username: "amir",
    password: "123"
  },
  {
    username: "pouya",
    password: "456"
  },
  {
    username: "ali",
    password: "789"
  },
  {
    username: "parsa",
    password: "012"
  },
  {
    username: "alex",
    password: "345"
  },
];

var myuser = document.getElementById ("myin1");
var mypass = document.getElementById ("myin2");
var signed = document.getElementById ("youre");
var profile = document.getElementById("profile");
var loggedin = document.getElementById("loggedin")
var loggedout = document.getElementById("logout")
var logs = document.getElementById("logs")

myuser.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		submit();
	};
}, false);
mypass.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		submit();
	};
}, false);

function submit() {
  if (myuser.value.toLowerCase() == "" || mypass.value == "") {
    alert ("Type Username and Password")
};
    for (var i = 0; i < users.length; i = i + 1)
    if (myuser.value.toLowerCase() === users[i].username && mypass.value === users[i].password) {
      signed.textContent=""
      loggedin.textContent= "Hi, " + myuser.value
      myuser3.value=""
      mypass4.value=""
      myuser.value=""
      mypass.value=""
      register1.textContent=""
      profiles();

      return;
    } else if (myuser.value.toLowerCase() !== "" && mypass.value !== "") {
      signed.textContent = "Your username Or Password is not matched."
    }
}

var myuser3 = document.getElementById ("myin3");
var mypass4 = document.getElementById ("myin4");
var register1 = document.getElementById ("taken");

myuser3.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		register();
	};
}, false);
mypass4.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		register();
	};
}, false);


function register() {
  var myuser3 = document.getElementById ("myin3");
  var mypass4 = document.getElementById ("myin4");
  var register1 = document.getElementById ("taken");
  var NewUser = {
    username : myuser3.value,
    password : mypass4.value
  }
  for (var i = 0; i < users.length; i = i + 1) {
    if (myuser3.value.toLowerCase() === users[i].username) {
      register1.textContent = "This Username is Taken, Try another.";
      return;
    } else if (myuser3.value.toLowerCase() !== users[i].username && mypass4.value.length < 3) {
      register1.textContent = "The password MUST be more than 3 digit";
      return;
  } else {
    users.push(NewUser);
    register1.textContent = "Welcome, you're now part our team, " +myuser3.value;
    myuser3.value=""
    mypass4.value=""
    myuser.value=""
    mypass.value=""
    return;
  };
 }
}

var filter = document.getElementById("filter")
var ul = document.getElementById("ul")

function addtask() {
var newtask = document.getElementById("newtask").value
var newone = document.createTextNode(newtask)
var newli = document.createElement("li")
newli.appendChild(newone)
ul.appendChild(newli)
}

function logout() {
  profile.classList.add("unshow")
  logs.classList.remove("unshow")
}

function removetask() {
  confirm("Are you sure?")
  document.getElementById("ul").innerHTML = "";
  document.getElementById("newtask").value="";

}

function profiles() {
  logs.classList.add("unshow")
  profile.classList.remove("unshow")
}
