class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :video_id
      t.integer :user_id
      t.text :remark

      t.timestamps
    end
  end
end
