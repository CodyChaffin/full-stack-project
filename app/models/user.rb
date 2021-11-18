class User < ApplicationRecord
    has_many :videos, dependent: :destroy
    has_many :comments, through: :videos
    has_secure_password

    validates :name,  length: {in: 4..13}, uniqueness: true
    validates :email, presence: true, uniqueness:true
end
