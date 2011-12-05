$(function() {
  $("#posts th a, #postpage .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $('#search').submit(function () {
    $.get(this.action, $(this).serialize(), null, 'script');
    return false;
  });
  $("#new_post a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
});