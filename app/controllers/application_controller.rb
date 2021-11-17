class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  
  
  before_action :confirm_authentication 
  private
  



  def current_user
    @current_user ||= User.find_by(id: sessions[:user_id])
  end
end
