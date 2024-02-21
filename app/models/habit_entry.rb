class HabitEntry < ApplicationRecord
  belongs_to :habit

  after_initialize :set_defaults

  def set_defaults
    self.start ||= Time.now
  end
end
