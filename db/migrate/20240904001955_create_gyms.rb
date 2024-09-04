class CreateGyms < ActiveRecord::Migration[7.2]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :address
      t.string :description, default: 'No description available'
      t.integer :rating, default: 0
      t.timestamps
    end
  end
end
