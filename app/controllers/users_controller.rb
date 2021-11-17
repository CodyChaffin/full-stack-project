class UsersController < ApplicationController
  

  # GET /tests/1
  # GET /tests/1.json
  def show
    if current_user
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

  def update
    if @test.update(test_params)
      render :show, status: :ok, location: @test
    else
      render json: @test.errors, status: :unprocessable_entity
    end
  end

  # def destroy
  #   @test.destroy
  # end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end

