class CommentSerializer < ActiveModel::Serializer
  attributes :id, :video_id, :user_id, :remark

  belongs_to :video
end
