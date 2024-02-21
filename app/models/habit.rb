class Habit < ApplicationRecord
  validates :name, presence: true

  has_many :habit_entries
end
