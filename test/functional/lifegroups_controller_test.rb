require 'test_helper'

class LifegroupsControllerTest < ActionController::TestCase
  setup do
    @lifegroup = lifegroups(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lifegroups)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lifegroup" do
    assert_difference('Lifegroup.count') do
      post :create, :lifegroup => @lifegroup.attributes
    end

    assert_redirected_to lifegroup_path(assigns(:lifegroup))
  end

  test "should show lifegroup" do
    get :show, :id => @lifegroup.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @lifegroup.to_param
    assert_response :success
  end

  test "should update lifegroup" do
    put :update, :id => @lifegroup.to_param, :lifegroup => @lifegroup.attributes
    assert_redirected_to lifegroup_path(assigns(:lifegroup))
  end

  test "should destroy lifegroup" do
    assert_difference('Lifegroup.count', -1) do
      delete :destroy, :id => @lifegroup.to_param
    end

    assert_redirected_to lifegroups_path
  end
end
