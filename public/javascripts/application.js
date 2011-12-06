$(function() {
  $("#posts th a, #postpage .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $('#search').submit(function () {
    $.get(this.action, $(this).serialize(), null, 'script');
    return false;
  });
  $("#back_link").live("click", function() {
    $("#middle_div").hide();
    return false;
  });
  
});