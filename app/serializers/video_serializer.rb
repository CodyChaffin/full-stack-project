class VideoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :likes, :description

  has_many :comments
end
