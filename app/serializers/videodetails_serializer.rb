class VideodetailsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :likes, :description
  
  belongs_to :user
end
