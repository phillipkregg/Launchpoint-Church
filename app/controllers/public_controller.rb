class PublicController < ApplicationController
      
  def index
    @pages = Page.all
  end

  def show
    @pages = Page.all
    @page = Page.find(params[:id])
    @lifegroups = Lifegroup.all

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @page }
    end
  end

end
