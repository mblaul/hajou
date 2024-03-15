class Habit < ApplicationRecord
  validates :name, presence: true

  has_many :habit_entries, dependent: :destroy

  def pending_habit_entry?
    habit_entries.with_state(HabitEntry::STATES[:running]).exists?
  end
end
