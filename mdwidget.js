function convertMDTextToHTML(mdText)  {
  return marked(mdText);
}

$(function() {
  $("#input").on('keyup', function(e) {
    var mdText =  $(e.target).val();
    var htmlText = (convertMDTextToHTML(mdText));
    $("#preview").html(htmlText);
  });
})
