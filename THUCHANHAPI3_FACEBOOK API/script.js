axios.get("https://graph.facebook.com/dangzantho/posts?fields=likes.summary(true),message,comments&access_token=EAAAAZAw4FxQIBAJYJjV2eKVzYZBl2wNnlJ27ww0Kh2dNr1zgw51UnG53YRRO5b6ZAsmloR1PpaXNCIMIRiD0JZA67IUmdZCChYdncF8qppEEKtu8TVPG83GBvz175bTsqadRFbAkzTU1phiZCQjelpfFZBB4B0fijTx3YfhyttWIwZDZD")
  .then(function (response) {
    let result = "";
    for(var i = 0; i < 3; i++){
        output +=  "<tr><th scope='row'>" + (i + 1) + "</th>" +
            "<td>" + response.data.data[i].message + "</td>" +
            "<td id='id" + i + "'>" + response.data.data[i].id + "</td>" +
            "<td> " + response.data.data[i].likes.summary.total_count + "</td>" +
            "<td ><input type='text' id='msg" + i + "'" + " placeholder='Enter a comment'/></td>" +
            "<td><button type='submit' id='" + i + "'" + ">Comment</button></td></tr>";

        output += "<h1>-Stt:" + (i+1) + "</h1>";
        output += "<p>Content:" + response.data.data[i].message + "</p>";
        output += "<p>Total like:" + response.data.data[i].likes.summary.total_count + "</p>";
    }
    document.getElementById('result').innerHTML = output;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });