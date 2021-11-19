class CommentsController < ApplicationController
  before_action :authorize_user, only: [:update, :destroy]
   
   
    comments = Comment.all
    render json: comments, status: :ok
  end
  
  
  def create
    comment = Comment.create(comment_params)
    if comment.valid?
      render json: comment, status: :created
    else
      render json: {errors: "Some error here"}, status: :unprocessable_entity
    end
  end
   
  def update
    comments = Comment.find_by(id: params[:id])
    if comments
      comments.update(change_comment)
    else
      render json: {error: "Original Comment Not Found"}, status: :not_found
    end
    

  
  def destroy
    comment = Comment.find_by(id: params[:id])
      if comment
        comment.destroy
        head :no_content
      else render json: {error: "Comment not found"}, status: :not_found
      end
    
  end

  private
   

    def authorize_user
      comment = Comment.find_by(id: params[:id])
      user_can_modify = comment.user_id == current_user.id
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

