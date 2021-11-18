class SessionsController < ApplicationController
    skip_before_action :confirm_authentication 

    def create
        user = User.find_by_name(params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "invalid credentials"}, status: :unauthorized
        end

    def create 
        video = Video.find_by(id: params[:id])
        if video
            session[:video_id] = video.id
            render json: video
        end
    end

    def destroy
        session.delete(:user_id)
    end

end
