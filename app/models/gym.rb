class Gym < ApplicationRecord
  before_save :set_default_description
  validates :name, presence: true
  validates :address, presence: true

  private

  def set_default_description
    self.description = "No description available" if description.blank?
  end
end
