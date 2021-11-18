class CommentsController < ApplicationController
  before_action :authorize_user, only: [:update, :destroy]
          # GET /tests
  # GET /tests.json
  def index
    # @tests = Test.all
    comments = Comment.all
    render json: comments, status: :ok
  end

  # GET /tests/1
  # GET /tests/1.json
  # def show
  # end

  # POST /tests
  # POST /tests.json
  def create
    comment = Comment.create(comment_params)
    if comment.valid?
      render json: comment.video, status: :created
    else
      render json: {errors: "Some error here"}, status: :unprocessable_entity
    end
  end
    # @test = Test.new(test_params)

    # if @test.save
    #   render :show, status: :created, location: @test
    # else
    #   render json: @test.errors, status: :unprocessable_entity
    # end
  # end

  # PATCH/PUT /tests/1
  # PATCH/PUT /tests/1.json
  def update
    comments = Comment.find_by(id: params[:id])
    if comments
      comments.update(change_comment)
    else
      render json: {error: "Original Comment Not Found"}, status: :not_found
    end
    # if @test.update(test_params)
    #   render :show, status: :ok, location: @test
    # else
    #   render json: @test.errors, status: :unprocessable_entity
    # end
  end

  # DELETE /tests/1
  # DELETE /tests/1.json
  def destroy
    comments = Comment.find_by(id: params[:id])
      if comments
        comments.destroy
        head :no_content
      else render json: {error: "Comment not found"}, status: :not_found
      end
    # @test.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_test
    #   @test = Test.find(params[:id])
    # end


    def authorize_user
      user_can_modify = @comment.user_id == current_user.id
      render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
    end


    def change_comment
      params.permit(:remark, :id)
    end
    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:video_id, :user_id, :remark)
    end
end

# {
#     ":video_id": 3,
#     "user_id": 4,
#     "remark": "is this working"
# }

