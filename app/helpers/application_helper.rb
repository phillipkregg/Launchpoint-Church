module ApplicationHelper
  
  def safe(content)
    "#{ content }".html_safe
  end
  
  def strong(content)
    "<strong>#{h(content)}</strong>".html_safe
  end
  
end
