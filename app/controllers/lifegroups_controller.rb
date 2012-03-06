class LifegroupsController < ApplicationController
  
  before_filter :authenticate_user!
  
  layout 'admin.html.erb'
  
  # GET /lifegroups
  # GET /lifegroups.xml
  def index
    @pages = Page.all
    @lifegroups = Lifegroup.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @lifegroups }
    end
  end

  # GET /lifegroups/1
  # GET /lifegroups/1.xml
  def show
    @lifegroup = Lifegroup.find(params[:id])
    @pages = Page.all
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @lifegroup }
    end
  end

  # GET /lifegroups/new
  # GET /lifegroups/new.xml
  def new
    @lifegroup = Lifegroup.new
    @pages = Page.all
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @lifegroup }
    end
  end

  # GET /lifegroups/1/edit
  def edit
    @lifegroup = Lifegroup.find(params[:id])
    @pages = Page.all
  end

  # POST /lifegroups
  # POST /lifegroups.xml
  def create
    @lifegroup = Lifegroup.new(params[:lifegroup])
    @pages = Page.all
    respond_to do |format|
      if @lifegroup.save
        format.html { redirect_to(@lifegroup, :notice => 'Lifegroup was successfully created.') }
        format.xml  { render :xml => @lifegroup, :status => :created, :location => @lifegroup }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @lifegroup.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /lifegroups/1
  # PUT /lifegroups/1.xml
  def update
    @lifegroup = Lifegroup.find(params[:id])
    @pages = Page.all

    respond_to do |format|
      if @lifegroup.update_attributes(params[:lifegroup])
        format.html { redirect_to(@lifegroup, :notice => 'Lifegroup was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @lifegroup.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /lifegroups/1
  # DELETE /lifegroups/1.xml
  def destroy
    @lifegroup = Lifegroup.find(params[:id])
    @lifegroup.destroy
    @pages = Page.all

    respond_to do |format|
      format.html { redirect_to(lifegroups_url) }
      format.xml  { head :ok }
    end
  end
end
