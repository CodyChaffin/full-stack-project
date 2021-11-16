class User < ApplicationRecord
    has_many :videos
    has_many :comments, through: :videos
end
