var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

// HTML helper functions
function show(id) {
	document.getElementById(id).style.display = 'block';
}

function hide(id) {
	document.getElementById(id).style.display = 'none';
}

function enable(id) {
  document.getElementById(id).disabled = false;
}

function disable(id) {
  document.getElementById(id).disabled = true;
}

function radio_valid(id) {
  var element = document.getElementById(id).checked;
}

function checkbox_valid(id) {
  alert('Checkbox Valid: '+id);
}

function text_valid(id) {
  alert('Text Valid: '+id);
}