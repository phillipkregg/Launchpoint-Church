module ApplicationHelper
  
  def safe(content)
    "#{ content }".html_safe
  end
  
  def strong(content)
    "<strong>#{h(content)}</strong>".html_safe
  end
  
  def show_header
    if params[:controller] == "public" && params[:action] == "index"
      return true
    end      
  end
  
  
end
