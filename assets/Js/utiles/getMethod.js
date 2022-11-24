export default (function getData() {

    var tbody = document.querySelector('tbody');
    var df = document.createDocumentFragment();
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    var fname = document.createElement("input");
    var lname = document.createElement("input");
    var contact = document.createElement("input");

    $.ajax({
        url: 'http://localhost:3000/user',
        type: 'GET',
        dataType: 'json',
        success: function() {
            $.getJSON("./API/db.json", function(posts) {
                posts.user.forEach(items => {
                    fname.textContent = `${items.user.name}`;
                    lname.textContent = `${items.user.last}`;
                    contact.textContent = `${items.user.contact}`;

                    tableData.appendChild(fname, lname, contact);
                    tableRow.appendChild(tableData);

                    df.appendChild(tableRow);
                    tbody.appendChild(df);
                });
            });
        },
    });
})();