$(function() {
  $("#posts th a, #posts .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#posts_search input").keyup(function() {
    $.get($("#posts_search").attr("action"), $("#posts_search").serialize(), null, "script");
    return false;
  });
});