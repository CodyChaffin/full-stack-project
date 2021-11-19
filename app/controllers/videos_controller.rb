class VideosController < ApplicationController
  before_action :set_video, only: [:show, :update, :destroy]
  # before_action :authorize_user, only: [:create, :update, :destroy]

  
          # GET /tests
  # GET /tests.json
  def index
    videos = Video.all
    render json: videos, status: :ok
  end

  # GET /tests/1
  # GET /tests/1.json
  def show
    video = Video.find_by(id: params[:id])
    if video
      render json: video 
    else
      render json: {error: "Video not found" }, status: :not_found
    end
  end

  # POST /tests
  # POST /tests.json
  def create
    video = Video.create(vid_upload)
    if video.valid?
      # session[:video_id] = video.id
      render json: video, status: :created
    else
      render json: {errors: "Unable to be processed"}, status: :unprocessable_entity
    end
  end

  def destroy
    videos = Video.find_by(id: params[:id])
      if videos
        videos.destroy
        head :no_content
      else render json: {error: "Video not found"}, status: :not_found
      end
    # @test.destroy
  end
#   {
# "user_id": 4,
# "url": "https://www.youtube.com/watch?v=N-RULFiOKvs",
# "title": "Feeling lazy all the time? DO THIS! | Tom Bilyeu",
# "likes": 7000,
# "description": "Tom Bilyeu explains how to end laziness and regain your motivation.",
# "veiws": 139511
# }
  #   @test = Test.new(test_params)

  #   if @test.save
  #     render :show, status: :created, location: @test
  #   else
  #     render json: @test.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  # def update
  #   if @test.update(test_params)
  #     render :show, status: :ok, location: @test
  #   else
  #     render json: @test.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy(cancle_vid)
  #   if video = Video
  # end

  # DELETE /tests/1
  # DELETE /tests/1.json
  # def destroy
  #   @test.destroy
  # end

  private

  def set_video
    @video = Video.find(params[:id])
  end

  # def authorize_user
  #   user_can_modify = current_user.admin? || @video.user_id == current_user.id
  #   render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
  # end

  def vid_upload
    params.permit(:user_id, :url, :title, :likes, :description, :veiws)
  end
    # Use callbacks to share common setup or constraints between actions.
    # def set_test
    #   @test = Test.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    # def test_params
    #   params.require(:test).permit(:name, :age)
    # end
end

