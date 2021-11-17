class VideodetailsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :likes, :description
  has_many :comments
  belongs_to :user
end
