class AddLatitudeAndLongitudeToGyms < ActiveRecord::Migration[7.2]
  def change
    add_column :gyms, :latitude, :float
    add_column :gyms, :longitude, :float
  end
end
