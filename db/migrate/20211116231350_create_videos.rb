class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.integer :user_id
      t.text :url
      t.string :title
      t.integer :likes
      t.text :description
      t.integer :veiws
      
      t.timestamps
    end
  end
end
