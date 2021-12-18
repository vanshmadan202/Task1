<script>

    $(function() {


   var people = [];

   $.getJSON('https://s3.amazonaws.com/open-to-cors/assignment.json', function(data) {
       $.each(data.products, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.subcategory + "</td>" +
           "<td>" + f.title + "</td>" + "<td>" + f.price + "</td>" + "<td>" + f.popularity + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");
     });

   });

});
</script>