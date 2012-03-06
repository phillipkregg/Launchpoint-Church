class BlurbsController < ApplicationController
  
  before_filter :authenticate_user!
  
  layout 'admin.html.erb'
  
  # GET /blurbs
  # GET /blurbs.xml
  def index
    @blurbs = Blurb.all
    @pages = Page.all
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @blurbs }
    end
  end

  # GET /blurbs/1
  # GET /blurbs/1.xml
  def show
    @blurb = Blurb.find(params[:id])
    @pages = Page.all
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @blurb }
    end
  end

  # GET /blurbs/new
  # GET /blurbs/new.xml
  def new
    @blurb = Blurb.new
    @pages = Page.all
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @blurb }
    end
  end

  # GET /blurbs/1/edit
  def edit
    @blurb = Blurb.find(params[:id])
    @pages = Page.all
  end

  # POST /blurbs
  # POST /blurbs.xml
  def create
    @blurb = Blurb.new(params[:blurb])
    @pages = Page.all

    respond_to do |format|
      if @blurb.save
        format.html { redirect_to(@blurb, :notice => 'Blurb was successfully created.') }
        format.xml  { render :xml => @blurb, :status => :created, :location => @blurb }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @blurb.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /blurbs/1
  # PUT /blurbs/1.xml
  def update
    @blurb = Blurb.find(params[:id])
    @pages = Page.all

    respond_to do |format|
      if @blurb.update_attributes(params[:blurb])
        format.html { redirect_to(@blurb, :notice => 'Blurb was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @blurb.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /blurbs/1
  # DELETE /blurbs/1.xml
  def destroy
    @blurb = Blurb.find(params[:id])
    @blurb.destroy
    @pages = Page.all

    respond_to do |format|
      format.html { redirect_to(blurbs_url) }
      format.xml  { head :ok }
    end
  end
end
