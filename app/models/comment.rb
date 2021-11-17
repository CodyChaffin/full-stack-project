class Comment < ApplicationRecord
    belongs_to :video
    belongs_to :user

    validates :remark, length: {maximum: 120}, allow_blank: false
end
