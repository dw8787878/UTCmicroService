function submitform() {
  let newName = 'John Smith',
      xhr = new XMLHttpRequest();

  xhr.open('POST', '/');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Success!');
    }
    else if (xhr.status !== 200) {
      alert('Request failed.  Returned status of ' + xhr.status);
    }

    xhr.send(encodeURI('name=' + newName));''

  }
}
