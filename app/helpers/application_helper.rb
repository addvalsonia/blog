# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
   def sortable(column, title = nil)
    title ||= column.titleize
    direction = column == params[:sort] && params[:direction] == "asc" ? "desc" : "asc"
    link_to title, params.merge(:sort => column, :direction => direction, :page => nil) 
  end
end
