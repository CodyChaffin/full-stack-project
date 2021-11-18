class VideoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :url, :title, :likes, :description, :veiws

  belongs_to :user
end
