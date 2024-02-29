class Habit < ApplicationRecord
  validates :name, presence: true

  has_many :habit_entries

  def pending_habit_entry?
    habit_entries.where(end: nil).where.not(start: nil).exists?
  end
end
