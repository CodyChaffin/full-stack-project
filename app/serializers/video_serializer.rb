class VideoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :likes, :description, :veiws, :comments
  has_many :comments
  belongs_to :user
end
