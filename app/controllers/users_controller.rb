class UsersController < ApplicationController
  # skip_before_action :confirm_authentication
  before_action :authorize_user, only: [:update, :destroy]

  # GET /tests/1
  # GET /tests/1.json
  def show
    if current_user
      # session[:user_id] = user.id
      render json: current_user, status: :ok
    else
      render json: {error: 'no active session'}, status: :unauthorized
    end
  end

  # POST /tests
  # POST /tests.json
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {error: user.errors}, status: :unprocessable_entity
    end

  end

  # def update
  #   if @test.update(test_params)
  #     render :show, status: :ok, location: @test
  #   else
  #     render json: @test.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @test.destroy
  # end

  private

  def authorize_user
    user_can_modify = @user.user_id == current_user.id
    render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
  end


    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:id, :name, :email, :password, :password_confirmation)
    end
end

