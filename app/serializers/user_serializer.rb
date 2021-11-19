class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  
  has_many :videos
end
